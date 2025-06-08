import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../../components/FormInput';
import NotificationModal from '../../components/NotificationModal';
import BigButton from '../../components/BigButton';
import regispic from '../../assets/regispic.png'; // gunakan gambar ilustrasi yang sama seperti register
// import { login } from '../../services/authService';

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
      <div className="hidden md:flex w-1/2 bg-[#5B8C51] items-center justify-center relative text-white px-12">
        <div className="max-w-md text-center">
          <img src={regispic} alt="Login Illustration" className="mb-4 mx-auto w-100" />
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
              onClick={() => navigate('/forgot-password')}
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
          Don’t have an account?{' '}
          <span
            className="text-[#5B8C51] font-semibold cursor-pointer hover:underline"
            onClick={() => navigate('/sign-up')}
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
