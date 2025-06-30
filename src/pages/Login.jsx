import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, useNavigate, Navigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:5000/api/v1/user/login",
          { email, password, confirmPassword, role: "Patient" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="text-center   pt-[200px]">
        <h2 className="text-3xl font-bold py-5">Sign In</h2>
        <p className="text-xl font-bold">Please Login To Continue</p>

        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
          Placeat culpa voluptas expedita itaque expedita
        </p>

        <form onSubmit={handleLogin}>
          <div className="text-center">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-teal-100 border my-4 p-1 w-[350px] rounded-xl px-2"
            />
          </div>
          <div className="text-center">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-teal-100 border  p-1 w-[350px] rounded-xl px-2"
            />
          </div>
          <div className="text-center">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-teal-100 border my-4  p-1 w-[350px] rounded-xl px-2"
            />
          </div>
          <div className=" text-center">
            <p>
              Not Registered?{" "}
              <span className="font-bold">
                <Link to={"/register"}>Register Now</Link>
              </span>
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="bg-teal-600 text-2xl text-white p-2 px-3 my-4 rounded-2xl"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
