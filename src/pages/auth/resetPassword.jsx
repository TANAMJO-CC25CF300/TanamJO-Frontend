import FormInput from '@/pages/auth/formInput';
import BigButton from '@/components/BigButton';
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = () => {
    if (password !== confirm) {
      alert("Password tidak sama!");
    } else {
      alert("Password berhasil diubah!");
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-none md:rounded-3xl shadow-none w-full md:w-1/2 max-w-md text-center border border-gray-200">
        <div className="text-left mb-4 text-[#5B8C51] text-sm hover:text-[#4A7A3F]">
          <ArrowLeft className="cursor-pointer" onClick={() => navigate('/login')} />
        </div>
        
        <div className="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#5B8C51]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>

        <div className="mb-6 text-left sm:text-center">
          <h2 className="text-2xl font-extrabold mb-2 bg-gradient-to-r from-[#5B8C51] to-[#0098C3] bg-clip-text text-transparent font-nunito tracking-wide leading-tight">
            Set New Password
          </h2>

          <div className="mb-0 flex sm:justify-center items-start sm:items-center">
            <p className="text-gray-600 text-sm font-nunito font-medium tracking-wide leading-normal">
              Buat password baru yang aman untuk akun Anda
            </p>
          </div>

          <p className="text-gray-500 text-sm font-nunito font-medium tracking-wide leading-normal">
            Pastikan password Anda memenuhi kriteria berikut:
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-6">
          <div className="flex flex-col items-center">
            <span className="font-bold text-base sm:text-lg text-gray-500 font-nunito tracking-wide leading-normal">+8</span>
            <span className="text-[10px] sm:text-xs text-blue-500 mt-1 font-nunito tracking-wide leading-normal">Character</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-base sm:text-lg text-gray-500 font-nunito tracking-wide leading-normal">AA</span>
            <span className="text-[10px] sm:text-xs text-blue-500 mt-1 font-nunito tracking-wide leading-normal">Uppercase</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-base sm:text-lg text-gray-500 font-nunito tracking-wide leading-normal">aa</span>
            <span className="text-[10px] sm:text-xs text-blue-500 mt-1 font-nunito tracking-wide leading-normal">Lowercase</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-base sm:text-lg text-gray-500 font-nunito tracking-wide leading-normal">123</span>
            <span className="text-[10px] sm:text-xs text-blue-500 mt-1 font-nunito tracking-wide leading-normal">Number</span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-bold text-base sm:text-lg text-gray-500 font-nunito tracking-wide leading-normal">!@#</span>
            <span className="text-[10px] sm:text-xs text-blue-500 mt-1 font-nunito tracking-wide leading-normal">Simbol</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="relative group">
            <FormInput
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5B8C51] focus:ring-2 focus:ring-[#5B8C51]/20 transition-all duration-200 pr-12 text-gray-700 placeholder-gray-400"
            />
            <div 
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-[#5B8C51] transition-colors duration-200 group-hover:text-[#5B8C51]"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>

            {password && (
              <div className="absolute -bottom-5 left-0 text-xs text-gray-500">
                {password.length < 8 ? (
                  <span className="text-red-500">Password terlalu pendek</span>
                ) : (
                  <span className="text-green-500">Password cukup panjang</span>
                )}
              </div>
            )}
          </div>
          
          <div className="relative group mt-7">
            <FormInput
              type={showPass ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#5B8C51] focus:ring-2 focus:ring-[#5B8C51]/20 transition-all duration-200 pr-12 text-gray-700 placeholder-gray-400"
            />

            <div 
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-[#5B8C51] transition-colors duration-200 group-hover:text-[#5B8C51]"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
            {confirm && (
              <div className="absolute -bottom-5 left-0 text-xs">
                {password !== confirm ? (
                  <span className="text-red-500">Password tidak cocok</span>
                ) : (
                  <span className="text-green-500">Password cocok</span>
                )}
              </div>
            )}
          </div>
        </div>
        
        <div onClick={handleSubmit} className="flex justify-center mt-8">
          <BigButton type="submit">Apply New Password</BigButton>
        </div>
      </div>
    </div>
  );
}