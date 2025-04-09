import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      setError("");
      setLoading(true);

      try {
        const res = await axios.get(
          "https://6239881763fdd477ac142016.mockapi.io/persons"
        );
        setEmployees(res.data);
      } catch (err) {
        console.error(err);
        setError("❌ Failed to fetch employees. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="p-4 md:w-auto lg:w-screen">
      <Link to={`/add`} className="text-green-500">
        Add New Employee
      </Link>
      <h6 className="font-bold mb-2">Employee Cards</h6>

      {loading && <p className="text-blue-600">Loading employees...</p>}

      {error && (
        <div className="mt-2 text-red-600 bg-red-100 p-2 rounded">
          <p>
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {employees.map((employee) => (
            <div key={employee.id} className="border p-4 rounded">
              <Link to={`/indetail/${employee.id}`}>
                <img src={employee.avatar} alt="" />
              </Link>
              <h3>{employee.name}</h3>
              <p className="text-pink-500">{employee.description}</p>
              <p className="text-yellow-300">{employee.city}</p>
              <div className="pt-5">
                <Link
                  to={`/edit/${employee.id}`}
                  className="text-white hover:underline bg-black rounded"
                >
                  Edit
                </Link>
                <Link
                  to={`/delete/${employee.id}`}
                  className="text-red-500 hover:underline ml-4 bg-blue-400 rounded "
                >
                  Delete
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetEmployees;
