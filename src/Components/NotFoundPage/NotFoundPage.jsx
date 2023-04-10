import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="error-page">
      <h1 className="error-page-title">404</h1>
      <h1 className="error-page-description">
        <span className="error-text">Oops!</span> Page not found
      </h1>
      <p className="error-text-description-2">
        The page you are looking for does not exist.
      </p>
      <div className="error-text-buttons">
        <button
          onClick={handleGoBack}
          className="error-text-button"
        >
          Go Back
        </button>
        <button
          onClick={handleGoHome}
          className="error-text-button"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;