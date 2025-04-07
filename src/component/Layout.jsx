import React, { useState } from "react";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    position: "Manager",
    image:""
  },
  {
    id: 1,
    name: "employee 1",
    position: "Engineer",
    image:""
  },
  {
    id: 2,
    name: "employee 2",
    position: "Designer",
   image:""
  },
];

const Layout = () => {
  const [users, setUsers] = useState(mockEmployees);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className=" text-black p-4 shadow-md">
        <ul className="flex justify-end gap-8">
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Card
            </Link>
          </li>
          <li>
            <Link to="/About" className="hover:text-yellow-400">
              About
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-yellow-400"></Link>
          </li>
          <li>
            <Link to="" className="hover:text-yellow-400"></Link>
          </li>
        </ul>
      </nav>
      <div className="p-6 max-w-4xl mx-auto w-full">
        <Outlet context={{ users, setUsers }} />
      </div>
    </div>
  );
};

export default Layout;
