import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BottomToolbar.scss";

const BottomToolbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isNewPost = location.pathname === "/new-post";

  const handlePlusClick = () => {
    if (!isNewPost) {
      localStorage.setItem("previousRoute", location.pathname);
      navigate("/new-post");
    } else {
      const previous = localStorage.getItem("previousRoute") || "/";
      navigate(previous);
    }
  };

  return (
    <div className="bottom-toolbar">
      <button onClick={() => navigate("/")} className="toolbar-button">
        <i className="bi bi-house-door"></i>
        <span>Avaleht</span>
      </button>

      <button onClick={handlePlusClick} className="toolbar-button plus-button">
        <i className={`bi ${isNewPost ? "bi-x" : "bi-plus-circle"}`}></i>
      </button>

      <button onClick={() => navigate("/account")} className="toolbar-button">
        <i className="bi bi-person"></i>
        <span>Minu konto</span>
      </button>
    </div>
  );
};

export default BottomToolbar;
