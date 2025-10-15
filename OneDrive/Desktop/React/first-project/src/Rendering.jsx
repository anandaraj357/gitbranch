import React, { useState } from "react";

function Rendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100" align="center">
      {isLoggedIn ? (
        <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4 text-green-600">
            Welcome back, User! 🎉
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="p-6 bg-white rounded-2xl shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4 text-blue-600">
            Please login to continue 🔐
          </h1>
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Rendering;
