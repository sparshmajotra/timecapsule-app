import { useEffect, useState } from "react";
import API from "./api";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    delivery_time: "",
  });

  // 📥 Fetch messages
  const fetchMessages = async () => {
    try {
      const res = await API.get("messages/");
      setMessages(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // ✍️ Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🚀 Create message
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedData = {
        ...form,
        delivery_time: new Date(form.delivery_time).toISOString(),
      };

      await API.post("messages/", formattedData);

      setForm({ title: "", content: "", delivery_time: "" });
      fetchMessages();
    } catch (err) {
      alert("Error: " + JSON.stringify(err.response?.data));
    }
  };

  // 🗑️ Delete message
  const handleDelete = async (id) => {
    await API.delete(`messages/${id}/`);
    fetchMessages();
  };

  // 🔐 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
      }}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center p-6 backdrop-blur-md bg-white/10 border-b border-white/20">
        <h1 className="text-xl font-semibold">Dashboard</h1>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm bg-white/20 px-4 py-2 rounded-lg"
        >
          <FiLogOut /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex justify-end p-10">
        <div className="w-[500px] space-y-6">

          {/* Create Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-2">
              Welcome 👋
            </h2>

            <p className="opacity-80 mb-4">
              Create a new message or view your activity
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/20 outline-none"
              />

              <input
                name="content"
                placeholder="Enter your message"
                value={form.content}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/20 outline-none"
              />

              <input
                type="datetime-local"
                name="delivery_time"
                value={form.delivery_time}
                onChange={handleChange}
                className="w-full p-3 rounded-xl bg-white/20 outline-none"
              />

              <button className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600">
                Create
              </button>
            </form>
          </div>

          {/* Messages */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-xl">
            <h3 className="text-xl font-semibold mb-4">
              Recent Messages
            </h3>

            {messages.length === 0 ? (
              <p className="text-center opacity-60">
                No messages yet 🚀
              </p>
            ) : (
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/10 p-4 rounded-xl flex justify-between items-center"
                  >
                    <div>
                      <p className="font-medium">{msg.title}</p>
                      <p className="text-sm opacity-70">{msg.content}</p>
                      <p className="text-xs opacity-60">
                        {new Date(msg.delivery_time).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span>
                        {msg.is_delivered ? "✅" : "⏳"}
                      </span>

                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="text-red-300 text-xs"
                      >
                        Delete
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;