import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý login ở đây...
  };

  const handleRegister = () => {
    // Ví dụ chuyển trang đăng ký
    window.location.href = "/register";
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">Đăng Nhập</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Tên đăng nhập
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Nút đăng nhập + đăng ký */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition"
            >
              Đăng Nhập
            </button>

            <button
              type="button"
              onClick={handleRegister}
              className="flex-1 border border-pink-500 text-pink-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-pink-100 transition"
            >
              Đăng Ký
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
