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

  return (
    
    <div className="min-h-screen flex flex-col md:flex-row items-stretch">
      {/* Panel kiri */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#5B8C51] to-[#4A7A3F] items-center justify-center relative text-white px-12 overflow-hidden">
        {/* Background dekoratif */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Konten utama */}
        <div className="max-w-md text-left relative z-10 flex flex-col justify-center h-full">
          <h1 className="text-3xl font-extrabold mb-6 font-nunito tracking-wide">Single Sign On</h1>
          
          <p className="text-sm leading-relaxed text-white/90 font-nunito font-semibold tracking-wide mb-10">
            Hi Digiers, sekarang akun-mu dapat digunakan untuk berbagai platform. Nikmati berbagai kemudahan akses platform dalam satu akun.
          </p>

          <div className="space-y-8">
            {[
              "Deteksi Penyakit Tomat",
              "Deteksi Jenis Tanaman",
              "Daily Check-in & Task",
              "Artikel & Panduan"
            ].map((title, i) => (
              <div className="flex items-start gap-4 text-sm" key={i}>
                <div className="w-8 h-8 flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-lg font-nunito tracking-wide leading-tight">{title}</p>
                  <p className="text-white/80 text-xs font-nunito font-medium leading-normal">
                    {title === "Deteksi Penyakit Tomat" && "Deteksi dini penyakit tanaman tomat menggunakan AI"}
                    {title === "Deteksi Jenis Tanaman" && "Identifikasi berbagai jenis tanaman menggunakan teknologi AI"}
                    {title === "Daily Check-in & Task" && "Kelola jadwal dan aktivitas harian budidaya tomat"}
                    {title === "Artikel & Panduan" && "Informasi lengkap seputar budidaya tomat"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-10">
        <div className="w-full max-w-xl">
          <button 
            className="text-[#5B8C51] text-sm hover:text-[#4A7A3F] flex items-center gap-1 font-nunito font-medium mb-8"
            onClick={() => navigate('/')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
            Beranda
          </button>

          <div className="text-left">
            <h1 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-[#5B8C51] to-[#0098C3] bg-clip-text text-transparent font-nunito tracking-wide leading-tight">
              New Account Registration
            </h1>
            <div className="flex items-center gap-2 mb-3">
              <p className="text-gray-600 text-lg font-nunito font-medium">Hi, Selamat Datang</p>
              <span className="px-3 py-1 rounded-full text-sm font-semibold bg-[#5B8C51]/10 text-[#5B8C51] font-nunito">
                #TanamJo
              </span>
            </div>
            <p className="text-gray-500 text-sm font-nunito font-medium">
              Masuk ke akun Anda untuk melanjutkan perjalanan bertani bersama kami
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8">
            <FormInput
              label={<span>Email<span className="text-red-500 ml-1.5">*</span></span>}
              name="email" type="email" value={form.email} onChange={handleChange}
              placeholder="Masukan Email Anda" required
              className="font-nunito font-medium tracking-wide leading-normal py-2.5"
            />

            <div className="flex flex-col sm:flex-row gap-0 sm:gap-4 mt-5">
              <div className="w-full sm:w-1/2 sm:mt-2">
                <FormInput
                  label={<span>Password<span className="text-red-500 ml-1.5">*</span></span>}
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="********"
                  required
                  className="font-nunito font-medium tracking-wide leading-normal mt-2 py-2.5"
                />
              </div>

              <div className="w-full sm:w-1/2 mt-2 sm:mt-2">
                <FormInput
                  label={<span>Confirm Password<span className="text-red-500 ml-1.5">*</span></span>}
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="********"
                  required
                  className="font-nunito font-medium tracking-wide leading-normal mt-2 py-2.5"
                />
              </div>
            </div>

            <div className="flex flex-col mt-2">
              <div className="flex justify-between items-center text-sm/6 font-nunito font-medium tracking-wide leading-normal">
                <label className="flex items-center gap-2 text-gray-600 font-nunito font-semibold tracking-wide leading-normal">
                  <input type="checkbox" name="agree" id="agree" checked={form.agree} onChange={handleChange} className="mt-0"/>
                  Saya setuju dengan Syarat dan Ketentuan dan Pemberitahuan Privasi yang berlaku
                </label>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <BigButton type="submit">Sign Up</BigButton>
            </div>
          </form>

          <p className="text-sm text-center text-gray-600 mt-5 font-nunito">
            Already have an account?{' '}
            <span className="text-[#5B8C51] font-bold cursor-pointer underline font-nunito tracking-wide leading-normal" onClick={() => navigate('/login')}>
              Sign In
            </span>
          </p>
        </div>
      </div>


      <NotificationModal
        isOpen={modal.isOpen}
        title={modal.title}
        type={modal.type}
        onClose={() => setModal((prev) => ({ ...prev, isOpen: false }))}
      >
        {modal.message}
      </NotificationModal>
    </div>
  );
}
