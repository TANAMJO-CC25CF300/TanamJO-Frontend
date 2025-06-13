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
    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], "photo.png", { type: "image/png" });
        const url = URL.createObjectURL(blob);
        setUploadPreview(url);
        setImageData(file);
        if (onIdentified) onIdentified(file);
      }
    }, "image/png");
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
    setUploadPreview(URL.createObjectURL(file));
    setImageData(file);
  };

  const handleUpload = () => {
    if (imageData instanceof File) {
      setShowCamera(false);
      setUploadError("");
      if (onIdentified) onIdentified(imageData);
      setUploadPreview(null);
      setImageData(null);
    }
  };

  return (
    <div className="w-full px-0 sm:px-0 md:px-0 flex justify-center mt-6">
      
      <div className="w-full max-w-7xl bg-opacity-95 border border-gray-200 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full">
            Smart Selections
          </span>
        </div>
        
        <div className="flex flex-col text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Upload Photo
          </h2>
          <p className="text-sm/6 md:text-sm/6 text-gray-500 font-medium text-left max-w-md">
            Upload a clear photo of your plant to identify diseases and get care recommendations
          </p>
        </div>

        <div
          className="border-2 border-dashed rounded-xl flex flex-col items-center justify-center py-8 cursor-pointer transition border-green-400 mb-3.5 min-h-[180px] md:min-h-[220px] lg:min-h-[260px]"
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

          <div className="flex flex-col items-center space-y-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-green-50 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-green-600 mb-2 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 4v16m8-8H4"
                />
                <rect x="4" y="4" width="16" height="16" rx="2" />
              </svg>
            </div>
            <div className="text-center space-y-2 sm:space-y-3 md:space-y-4">

              <h3 className="font-bold text-xl sm:text-2xl md:text-3xl tracking-wide bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Drag & Drop Images
              </h3>

              <div className="flex flex-col items-center gap-1.5 sm:gap-2 md:gap-2.5">

                <p className="text-xs sm:text-sm md:text-base text-gray-500 font-medium">
                  Or click to <span className="text-green-600 font-semibold hover:text-green-700 cursor-pointer transition-colors duration-200 underline decoration-2 underline-offset-4">Browse Files</span>
                </p>

                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 font-medium font-nunito tracking-wide leading-normal">
                  Upload your plant image for identification
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-50/80 backdrop-blur-sm rounded-lg p-2.5 sm:p-3 md:p-3.5 mb-4 gap-2 sm:gap-0">

          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-600">Supported Formats: <span className="text-emerald-600 font-semibold">JPG, PNG, JPEG</span></span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="text-[10px] xs:text-xs sm:text-sm font-medium text-gray-600">Maximum Size: <span className="text-emerald-600 font-semibold">2 MB</span></span>
          </div>
        </div>

        {uploadError && (
          <div className="text-red-500 text-sm mb-2 text-center">
            {uploadError}
          </div>
        )}
        {uploadPreview && (
          <div className="flex flex-col items-center mb-2">
            <img
              src={uploadPreview}
              alt="Preview"
              className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-lg border border-gray-200 mb-2"
            />
          </div>
        )}  

        <div className="flex justify-center mb-4">
          <button
            onClick={handleUpload}
            disabled={!imageData}
            className={`group relative px-8 py-3 rounded-xl font-semibold shadow-sm ${
              imageData
                ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:shadow-emerald-200/50"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Upload Image
            </span>
            <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>

        {/* Divider Or */}
        <div className="flex items-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 font-semibold">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        
        {/* Camera Section */}
        <div className="bg-white rounded-full border border-gray-200 p-4 mt-8">
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

            <span className="font-semibold font-nunito tracking-wide text-base md:text-md bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Take A Photo With Camera
            </span>

            <div className="flex-grow"></div>
            {!showCamera && (
              <button
                onClick={() => setShowCamera(true)}
                className="text-gray-400 underline hover:text-green-900 text-sm/6 font-nunito leading-normal tracking-wider"
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
