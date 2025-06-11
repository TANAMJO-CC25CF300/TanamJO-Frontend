import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '@/pages/auth/formInput';
import NotificationModal from '@/components/landingPages/notifikasi/notificationModal';
import BigButton from '@/components/BigButton';
// import regispic from '@/assets/regispic.png'; 

export default function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    type: '',
    children: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // await login({ email: form.email, password: form.password });
      setModal({
        isOpen: true,
        title: 'Login Berhasil',
        type: 'success',
        children: <p>Selamat datang kembali di <strong>TanamJo</strong>!</p>,
      });
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      setModal({
        isOpen: true,
        title: 'Login Gagal',
        type: 'error',
        children: <p>{err.message || 'Email atau password salah.'}</p>,
      });
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Right Side Image */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#5B8C51] to-[#4A7A3F] items-center justify-center relative text-white px-12 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-md text-left relative z-10 mr-25">
          {/* Tomato Theme Content */}
          <div className="space-y-6">
            <h1 className="text-3xl font-extrabold mb-2 text-white font-nunito tracking-wide leading-tight">
              Single Sign On
            </h1>
            <p className="text-sm/6 leading-relaxed text-white/90 max-w-xl font-nunito font-semibold tracking-wide">
              Hi Digiers, Sekarang akun-mu dapat digunakan untuk berbagai platform. Nikmati berbagai kemudahan akses platform dalam satu akun.
            </p>

            
            <div className="mt-8 space-y-8">
              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-white font-nunito tracking-wide leading-tight text-lg">Tomat Training</span>
                  <div className="text-white/80 text-xs font-nunito font-medium tracking-wide leading-normal">Platform Pelatihan Budidaya Tomat</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-white font-nunito tracking-wide leading-tight text-lg">Tomat Market</span>
                  <div className="text-white/80 text-xs font-nunito font-medium tracking-wide leading-normal">Platform Jual Beli Hasil Panen Tomat</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-white font-nunito tracking-wide leading-tight text-lg">Komunitas Tomat</span>
                  <div className="ttext-white/80 text-xs font-nunito font-medium tracking-wide leading-normal">Forum & Dukungan Petani Tomat</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-white font-nunito tracking-wide leading-tight text-lg">Sertifikasi Tomat</span>
                  <div className="text-white/80 text-xs font-nunito font-medium tracking-wide leading-normal">Platform Sertifikasi & Standar Budidaya</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-white font-nunito tracking-wide leading-tight text-lg mb-3">Indeks Tomat Indonesia</span>
                  <div className="text-white/80 text-xs font-nunito font-medium tracking-wide leading-normal">Website Indeks Kesehatan Tanaman Tomat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
        <button
          className="absolute top-4 left-10 text-gray-500 text-sm hover:underline"
          onClick={() => navigate('/')}
        >
          &lt; Beranda
        </button>

        <h1 className="text-3xl font-extrabold mb-2 mt-10">Log In Account</h1>
        <p className="mb-6 text-gray-600">
          Hi, Selamat Datang <span className="text-[#5B8C51] font-semibold">#TanamJo</span>
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <FormInput
            label={
              <span>
                Email<span className="text-red-500 ml-1">*</span>
              </span>
            }
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Masukan Email Anda"
            required
          />

          <FormInput
            label={
              <span>
                Password<span className="text-red-500 ml-1">*</span>
              </span>
            }
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="********"
            required
          />

          <div className="flex justify-between items-center text-sm mt-2">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="rounded"
              />
              Remember Me
            </label>
            <button
              type="button"
              onClick={() => navigate('/resetPassword')}
              className="text-[#5B8C51] hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <div className="flex justify-center">
            <BigButton type="submit">Login</BigButton>
          </div>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don't have an account?{' '}
          <span
            className="text-[#5B8C51] font-semibold cursor-pointer hover:underline"
            onClick={() => navigate('/register')}
          >
            Sign Up
          </span>
        </p>
      </div>

      {/* Modal */}
      <NotificationModal
        isOpen={modal.isOpen}
        title={modal.title}
        type={modal.type}
        onClose={() => setModal((prev) => ({ ...prev, isOpen: false }))}
      >
        {modal.children}
      </NotificationModal>
    </div>
  );
}