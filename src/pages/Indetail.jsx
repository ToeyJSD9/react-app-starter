import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_BASE = 'http://localhost:5000';


const Indetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployee = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(`${API_BASE}/persons/${id}`);
        setEmployee(res.data);

      } catch (err) {
        console.error(err);
        setError("❌ Failed to fetch employee details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <div className="p-4 flex justify-center gap-16">
      {employee && (
        <div className="border p-4 rounded">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="w-50 h-50 rounded-full"
          />
          <div className="mt-4">
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>City:</strong> {employee.city}</p>
            <p><strong>Position:</strong> {employee.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Indetail;
