import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '@/pages/auth/formInput';
import NotificationModal from '@/components/landingPages/notifikasi/notificationModal';
import BigButton from '@/components/BigButton';

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.agree) {
      return setModal({
        isOpen: true,
        title: 'Registrasi Gagal',
        type: 'error',
        children: <p>Anda harus menyetujui Syarat dan Ketentuan terlebih dahulu.</p>,
      });
    }

    if (form.password !== form.confirmPassword) {
      return setModal({
        isOpen: true,
        title: 'Registrasi Gagal',
        type: 'error',
        children: <p>Konfirmasi password tidak sesuai.</p>,
      });
    }

    try {
      // Simulasikan registrasi user
      // await register({ email: form.email, password: form.password });

      setModal({
        isOpen: true,
        title: 'Registrasi Berhasil',
        type: 'success',
        children: <p>Selamat datang di <strong>TanamJo</strong>! Silakan login.</p>,
      });

      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setModal({
        isOpen: true,
        title: 'Registrasi Gagal',
        type: 'error',
        children: <p>{err.message || 'Email sudah digunakan.'}</p>,
      });
    }
  };

  const isPasswordMismatch = form.password !== form.confirmPassword && form.confirmPassword.length > 0;

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Right Image/Info Section */}
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

            <div className="mt-8 space-y-9">
              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-white font-nunito tracking-wide leading-tight text-lg">Deteksi Penyakit Tomat</span>
                  <div className="text-white/80 text-xs font-nunito font-medium tracking-wide leading-normal">Deteksi dini penyakit tanaman tomat menggunakan AI</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-white font-nunito tracking-wide leading-tight text-lg">Deteksi Jenis Tanaman</span>
                  <div className="text-white/80 text-xs font-nunito font-medium tracking-wide leading-normal">Identifikasi berbagai jenis tanaman menggunakan teknologi AI</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-white font-nunito tracking-wide leading-tight text-lg">Daily Check-in & Task</span>
                  <div className="text-white/80 text-xs font-nunito font-medium tracking-wide leading-normal">Kelola jadwal dan aktivitas harian budidaya tomat</div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div>
                  <span className="font-bold text-white font-nunito tracking-wide leading-tight text-lg">Artikel & Panduan</span>
                  <div className="text-white/80 text-xs font-nunito font-medium tracking-wide leading-normal">Informasi lengkap seputar budidaya tomat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left Form Section */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
        <button className="absolute top-4 left-10 text-gray-500 text-sm hover:text-gray-700 flex items-center gap-1 font-nunito font-medium tracking-wide leading-normal"
          onClick={() => navigate('/')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
          Beranda
        </button>

        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-[#5B8C51] to-[#0098C3] bg-clip-text text-transparent font-nunito tracking-wide leading-tight">
            Create Account
          </h1>
          <div className="flex items-center gap-2 mb-3">
            <p className="text-gray-600 text-lg font-nunito font-medium tracking-wide leading-normal">
              Hi, Ayo Bergabung
            </p>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold font-nunito tracking-wide leading-normal bg-[#5B8C51]/10 text-[#5B8C51]">
              #TanamJo
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-8 font-nunito font-medium tracking-wide leading-normal ">
            Masuk ke akun Anda untuk melanjutkan perjalanan bertani bersama kami
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <FormInput
              label={<span>Email<span className="text-red-500 ml-1">*</span></span>}
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Masukkan Email Anda"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label={<span>Password<span className="text-red-500 ml-1">*</span></span>}
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              required
            />

            <FormInput
              label={<span>Confirm Password<span className="text-red-500 ml-1">*</span></span>}
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              required
              className={isPasswordMismatch ? 'border-red-500' : ''}
            />
          </div>

          <div className="flex flex-col">
            <div className="flex justify-between items-center text-sm/6 font-nunito font-medium tracking-wide leading-normal">
              <label className="flex items-center gap-2 text-gray-600 font-nunito font-semibold tracking-wide leading-normal">
                <input type="checkbox" name="agree" id="agree" checked={form.agree} onChange={handleChange} className="mt-1"/>
                Saya setuju dengan Syarat dan Ketentuan dan Pemberitahuan Privasi yang berlaku
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <BigButton type="submit">Sign Up</BigButton>
          </div>
        </form>

        <p className="text-sm/6 text-center mt-6 text-gray-600 font-nunito font-normal tracking-wide leading-normal">
          Already have an account?{' '}
          <span
            className="text-[#5B8C51] font-bold cursor-pointer underline font-nunito tracking-wide leading-normal"
            onClick={() => navigate('/login')}
          >
            Sign In
          </span>
        </p>
      </div>   

      {/* Modal Notification */}
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
