import FormInput from '../../components/FormInput';
import Button from '../../components/BigButton';
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = () => {
    if (password !== confirm) {
      alert("Password tidak sama!");
    } else {
      alert("Password berhasil diubah!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-[90%] max-w-md text-center">
        <div className="text-left mb-4">
          <ArrowLeft className="cursor-pointer" />
        </div>
        <div className="flex justify-center mb-4">
          <img src="/lock-icon.svg" alt="lock" className="h-10" />
        </div>
        <h2 className="text-lg font-semibold mb-1">Set new password</h2>
        <p className="text-sm text-gray-500 mb-4">
          Make sure your password has the following content:
        </p>
        <div className="text-xs flex justify-between text-gray-600 mb-4">
          <span>+8 Characters</span>
          <span>AA</span>
          <span>aa</span>
          <span>123</span>
          <span>!@#</span>
        </div>
        <div className="mb-4 relative">
          <Input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="absolute right-3 top-2.5 cursor-pointer" onClick={() => setShowPass(!showPass)}>
            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>
        <div className="mb-6 relative">
          <Input
            type={showPass ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <div className="absolute right-3 top-2.5 cursor-pointer" onClick={() => setShowPass(!showPass)}>
            {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>
        <Button onClick={handleSubmit} className="w-full bg-[#4C8B5E] hover:bg-[#3a6d4a] text-white">
          Set new password
        </Button>
      </div>
    </div>
  );
}
