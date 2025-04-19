import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_BASE = import.meta.env.VITE_API_BASE;

const PostEmployee = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [avatar, setAvatar] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post(`${API_BASE}/persons`, {
        name,
        avatar,
        city,
        description,
      });
      navigate("/");
    } catch (err) {
      setError("❌ Failed to add employee. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 grid aligh-center justify-center gap-16">
      <div className="object-top">
      <h2 className="text-xl font-bold mb-2">Add New Employee</h2>
      </div>
      {error && (
        <div className="mt-2 text-red-600 bg-red-100 p-2 rounded">
          <p>
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Position</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">City</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block">Avatar</label>
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            className="border p-2 w-full"
            required
          />
          {avatar && (
            <div className="mt-4">
              <img
                src={avatar}
                alt="อุ้มอยากเห็นรูปเลยทันที"
                className="w-40 h-40 object-full"
              />
            </div>
          )}
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white p-2 w-full ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Employee"}
        </button>
      </form>
    </div>
  );
};

export default PostEmployee;
