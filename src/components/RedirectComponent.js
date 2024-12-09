import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const RedirectComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /origin/en when the component is rendered
    navigate("/en");
  }, [navigate]);

  return (
    <>
      <Navbar showBlackBg={true} />
      <main className="main-root">
        <div id="dsn-scrollbar">
          <div className="wrapper">Redirecting...</div>
        </div>
      </main>
    </>
  );
};

export default RedirectComponent;
