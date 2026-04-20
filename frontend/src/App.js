import { useState } from "react";
import API from "./api";
import Dashboard from "./Dashboard";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await API.post("login/", {
          username: form.username,
          password: form.password,
        });

        localStorage.setItem("token", res.data.token);
        setIsAuth(true);
      } else {
        const res = await API.post("register/", form);

        localStorage.setItem("token", res.data.token);
        setIsAuth(true);
      }
    } catch (err) {
      alert(
        err.response?.data?.error ||
        err.response?.data?.detail ||
        "Something went wrong"
      );
    }
  };

  // 🔐 If logged in → show dashboard
  if (isAuth) {
    return <Dashboard />;
  }

  // 🎨 Auth UI
  return (
    <div
      className="h-screen w-full flex items-center justify-end bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
      }}
    >
      <div className="mr-20 w-[400px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 text-white">

        <h2 className="text-3xl font-bold mb-2 text-center">
          {isLogin ? "Welcome Back!" : "Create Account"}
        </h2>

        <p className="text-center text-sm mb-6 opacity-80">
          {isLogin ? "Login to your account" : "Start your journey"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Username */}
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 placeholder-white outline-none"
          />

          {/* Email only for register */}
          {!isLogin && (
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-white/20 placeholder-white outline-none"
            />
          )}

          {/* Password */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-white/20 placeholder-white outline-none"
          />

          {/* Button */}
          <button className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition">
            {isLogin ? "Log In" : "Register"}
          </button>
        </form>

        {/* Toggle */}
        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-center mt-5 text-sm cursor-pointer"
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default App;