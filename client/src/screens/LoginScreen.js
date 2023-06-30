import React, { useState } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import Error from "../components/Error";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function Login() {
    setLoading(true);
    const user = {
      email,
      password,
    };
    try {
      const result = (await axios.post("/api/users/login", user)).data;
      console.log(result);
      localStorage.setItem("currentUser", JSON.stringify(result));
      window.location.href = "/home";
    } catch (error) {
      console.log(error);
      setError("Invalid Credentials");
    }
    setLoading(false);
  }

  return (
    <div>
      {loading && <Loader />}

      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5">
          {error.length > 0 && <Error msg={error} />}
          <div className="bs">
            <h2 style={{ marginBottom: "1.5rem" }}>Login</h2>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {loading ? (
              <div className="mb-3">Login...Please Wait...</div>
            ) : (
              <button
                className="btn btn-primary"
                onClick={Login}
                style={{
                  width: "100%",
                  marginTop: "0.5rem",
                  transition: "background-color 0.3s, color 0.3s",
                  ":hover": {
                    backgroundColor: "#337ab7",
                    color: "white",
                  },
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
