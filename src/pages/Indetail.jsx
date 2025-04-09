import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
        const res = await axios.get(
          `https://6239881763fdd477ac142016.mockapi.io/persons/${id}`
        );
        setEmployee(res.data);
      } catch (err) {
        console.error(err);
        setError(
          "❌ Failed to fetch employee details. Please try again later."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <div className="p-4">
      {employee && (
        <div className="border p-4 rounded">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="w-50 h-50 rounded-full"
          />
          <h2 className="font-bold text-xl">{employee.name}</h2>
          <p className="text-pink-500">{employee.description}</p>
          <div className="mt-4">
            <p>
              <strong>Email:</strong> {employee.email}
            </p>
            <p>
              <strong>Phone:</strong> {employee.phone}
            </p>
            <p>
              <strong>Position:</strong> {employee.position}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Indetail;
