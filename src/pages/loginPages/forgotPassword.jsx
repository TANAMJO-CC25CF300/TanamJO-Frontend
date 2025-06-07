import FormInput from '../../components/FormInput';
import Button from '../../components/BigButton';
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Simulasi kirim email link reset
    alert(`Link reset dikirim ke ${email}`);
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
        <h2 className="text-lg font-semibold mb-1">Forgot your password?</h2>
        <p className="text-sm text-gray-500 mb-6">Enter your email for instructions</p>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-6"
        />
        <Button onClick={handleSubmit} className="w-full bg-[#4C8B5E] hover:bg-[#3a6d4a] text-white">
          Send link to change password
        </Button>
      </div>
    </div>
  );
}
