import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setLoginStatus("Başarılı");
    } else {
      setIsLoggedIn(false);
      setLoginStatus("Giriş yapılmadı");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div>
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <NavLink
              to="/home"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/contact"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <span>Contact</span>
            
            
            </NavLink>
            {isLoggedIn ? (
              <button
                className="list-group-item list-group-item-action py-2 ripple"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <span>Login</span>
              </NavLink>
            )}


             <NavLink
              to="/home"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <span> {loginStatus && <p>{loginStatus}</p>}</span>
            </NavLink>


            
          </div>
     
        </div>
      </nav>
      
    </div>
  );
};

export default Sidebar;
