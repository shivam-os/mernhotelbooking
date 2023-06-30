import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../assets/hero.webp";

AOS.init({
  duration: 2000,
});

function LandingScreen() {
  const containerStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflowX: "hidden",
    width: "100vw",
    maxWidth: "100%",
  };

  const buttonStyle = {
    backgroundColor: "#fca311",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };

  const landingBtnStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
    marginTop: "20px",
  };

  return (
    <div className="row landing" style={containerStyle}>
      <div className="col-md-12 text-center">
        <h2
          data-aos="zoom-in"
          style={{ color: "white", fontSize: "2.5rem", marginTop: "100px" }}
        >
          A lifetime of discounts? It's Genius.
        </h2>
        <p style={{ color: "white", fontSize: "1.2rem" }}>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account.
        </p>
        <Link to="/register">
          <button
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#e68a00";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#fca311";
            }}
          >
            Sign in/Register
          </button>
        </Link>
        <h1
          data-aos="zoom-out"
          style={{ color: "white", marginTop: "40px", fontSize: "3rem" }}
        >
          There is only one boss. The Guest.
        </h1>
        <Link to="/home">
          <button
            className="btn btn-primary landingBtn"
            style={landingBtnStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#0062cc";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#007bff";
            }}
          >
            Book Your Room
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingScreen;
