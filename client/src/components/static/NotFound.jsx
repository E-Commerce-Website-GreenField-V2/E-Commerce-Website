import React from "react";
import { useNavigate } from "react-router";

import "../../style/NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="roadmap">
        <div className="account">Home</div>
        <img className="roadmap-child" alt="" src="/line-13@2x.png" />
        <div className="english">404 Error</div>
        <img className="roadmap-item" alt="" />
        <div className="nothing1">Nothing</div>
        <img className="roadmap-item" alt="" />
        <div className="nothing1">Nothing</div>
        <img className="roadmap-item" alt="" />
        <div className="nothing1">Nothing</div>
      </div>
      <div className="not-found-parent">
        <div className="not-found">404 Not Found</div>
        <div className="your-visited-page">
          Your visited page not found. You may go home page.
        </div>
      </div>
      <div className="button">
        <div className="view-all-products" onClick={goToHomePage}>
          Back to home page
        </div>
      </div>
    </>
  );
}

export default NotFound;
