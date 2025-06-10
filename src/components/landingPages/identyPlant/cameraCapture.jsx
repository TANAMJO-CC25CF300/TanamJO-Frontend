import React, { useState, useEffect, useRef } from "react";

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/jpg"];

const CameraCapture = ({ onIdentified }) => {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState("");
  const [showCamera, setShowCamera] = useState(false);
  const [uploadPreview, setUploadPreview] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const cameraVideoRef = useRef(null);
  const cameraCanvasRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    let stream;
    if (showCamera) {
      const initCamera = async () => {
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: {
              width: { ideal: 1280 },
              height: { ideal: 720 },
              aspectRatio: 16 / 9,
            },
          });
          cameraVideoRef.current.srcObject = stream;
          cameraVideoRef.current.play();
        } catch {
          setError(
            "Tidak dapat mengakses kamera. Pastikan izin kamera sudah diberikan."
          );
        }
      };
      initCamera();
    }
    return () => {
      if (cameraVideoRef.current && cameraVideoRef.current.srcObject) {
        let tracks = cameraVideoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [showCamera]);

  const takePicture = () => {
    const canvas = cameraCanvasRef.current;
    const context = canvas.getContext("2d");
    const video = cameraVideoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/png");
    setImageData(dataUrl);
    if (onIdentified) onIdentified(dataUrl);
    setShowCamera(false);
  };

  // Upload Handlers
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    validateAndPreview(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    validateAndPreview(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const validateAndPreview = (file) => {
    setUploadError("");
    if (!file) return;
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setUploadError("Format file harus JPG, JPEG, atau PNG.");
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setUploadError("Ukuran file maksimal 2MB.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (uploadPreview) {
      setImageData(uploadPreview);
      setShowCamera(false);
      setUploadError("");
      if (onIdentified) onIdentified(uploadPreview);
      setUploadPreview(null);
    }
  };

  return (
    <div className="w-full px-2 sm:px-4 md:px-8 flex justify-center mt-6">
      {/* Card utama */}
      <div className="w-full max-w-5xl bg-opacity-95 border border-gray-200 rounded-2xl p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full">
            Smart Selections
          </span>
        </div>
        {/* Upload Photo */}
        <h2 className="text-lg md:text-xl font-semibold mb-2">Upload Photo</h2>
        <div
          className="border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center py-8 cursor-pointer transition hover:border-green-400 mb-2 min-h-[180px] md:min-h-[220px] lg:min-h-[260px]"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={() => fileInputRef.current.click()}
        >
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 text-green-700 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
            <span className="font-semibold text-lg md:text-xl text-gray-700">
              Drag & Drop Images
            </span>
            <span className="text-sm md:text-base text-gray-500">
              Or <span className="underline text-green-700">Browse</span> Image
              On Your Computer
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between text-xs md:text-sm text-gray-500 mb-2 gap-2">
          <span>Supported Formats: JPG, PNG, JPEG</span>
          <span>Maximum Size: 2 Mb</span>
        </div>
        {uploadError && (
          <div className="text-red-500 text-sm mb-2 text-center">
            {uploadError}
          </div>
        )}
        {uploadPreview && !imageData && (
          <div className="flex flex-col items-center mb-2">
            <img
              src={uploadPreview}
              alt="Preview"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg border border-gray-200 mb-2"
            />
          </div>
        )}
        <div className="flex justify-center mb-2">
          <button
            onClick={handleUpload}
            disabled={!uploadPreview}
            className={`px-8 py-2 rounded-lg font-semibold shadow transition ${
              uploadPreview
                ? "bg-green-600 text-white hover:bg-green-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            UPLOAD
          </button>
        </div>
        {/* Divider Or */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 font-semibold">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        {/* Camera Section */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block bg-gray-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7h2l.4-1.2A2 2 0 017.2 4h9.6a2 2 0 011.8 1.8L19 7h2a2 2 0 012 2v9a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z"
                />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </span>
            <span className="font-medium text-base md:text-lg">
              Take A Photo With Camera
            </span>
            <div className="flex-grow"></div>
            {!showCamera && (
              <button
                onClick={() => setShowCamera(true)}
                className="text-green-700 underline hover:text-green-900 text-sm"
              >
                show access
              </button>
            )}
          </div>
          {error && (
            <div className="text-red-500 text-sm mb-2 text-center">{error}</div>
          )}
          {showCamera && (
            <>
              <div className="flex justify-center">
                <video
                  ref={cameraVideoRef}
                  className="w-full max-w-xs md:max-w-md lg:max-w-2xl rounded-lg border border-gray-200"
                />
                <canvas ref={cameraCanvasRef} style={{ display: "none" }} />
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={takePicture}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                >
                  Take Picture
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CameraCapture;