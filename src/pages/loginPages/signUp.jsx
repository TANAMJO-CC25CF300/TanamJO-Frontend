import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import NotificationModal from '../../components/NotificationModal';
import BigButton from '../../components/BigButton';
import regispic from '../../assets/regispic.png'; 

export default function RegisterPage() {
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
      await register({ email: form.email, password: form.password });
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
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
        <button
          className="absolute top-4 left-10 text-gray-500 text-sm hover:underline"
          onClick={() => navigate('/')}
        >
          &lt; Beranda
        </button>

        <h1 className="text-3xl font-extrabold mb-2 mt-10">New Account Registration</h1>
        <p className="mb-6 text-gray-600">
          Hi, Ayo bergabung menjadi <span className="text-[#5B8C51] font-semibold">#TanamJo</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            placeholder="Masukkan Email Anda"
            required
          />
          <div className="flex gap-4">
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
            <FormInput
              label={
                <span>
                  Confirm Password<span className="text-red-500 ml-1">*</span>
                </span>
              }
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              required
              className={isPasswordMismatch ? 'border-red-500' : ''}
            />
          </div>

          <div className="flex items-start gap-2 text-sm mt-2">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1"
            />
            <label htmlFor="agree" className="text-gray-600">
              Saya setuju dengan <span className="font-medium">Syarat dan Ketentuan</span> dan
              <span className="font-medium"> Pemberitahuan Privasi</span> yang berlaku
            </label>
          </div>

          <div className="flex justify-center">
            <BigButton type="submit">Sign Up</BigButton>
          </div>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{' '}
          <span
            className="text-[#5B8C51] font-semibold cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Sign In
          </span>
        </p>
      </div>

      {/* Right Side Content */}
      <div className="hidden md:flex w-1/2 bg-[#5B8C51] items-center justify-center relative text-white px-12">
        <div className="max-w-md text-center">
          <img src={regispic} alt="Register Illustration" className="mb-4 mx-auto w-100" />
          <h1 className="text-2xl font-bold mb-4">Smart Planting Needs</h1>
          <p className="text-sm">
            During the initial years of introduction of the modern crop varieties, micronutrient
            deficiency disorders were discovered as an obstacle to obtain higher yields.
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <span className="h-2 w-2 bg-white rounded-full"></span>
            <span className="h-2 w-2 bg-white/50 rounded-full"></span>
            <span className="h-2 w-2 bg-white/50 rounded-full"></span>
          </div>
        </div>
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
