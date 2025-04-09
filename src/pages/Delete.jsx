import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteEmployee = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(
        `https://6239881763fdd477ac142016.mockapi.io/persons/${id}`
      );
      navigate("/");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Delete Employee</h2>
      <p>SURE TO DELETE BRO? </p>
      <button
        onClick={handleDelete}
        className={`bg-red-500 text-white p-2 w-full ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Deleting..." : "Delete Employee"}
      </button>
    </div>
  );
};

export default DeleteEmployee;
