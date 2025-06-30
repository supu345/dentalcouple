import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const navigateTo = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:5000/api/v1/user/patient/register",
          { firstName, lastName, email, phone, nic, dob, gender, password },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setDob("");
          setGender("");
          setPassword("");
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
      <div className="text-center register-form mt-[200px] ">
        <h2 className="text-3xl font-bold py-5">Sign Up</h2>
        <p className="text-xl font-bold">Please Sign Up To Continue</p>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
          Placeat culpa voluptas expedita itaque expedita
        </p>
        <form onSubmit={handleRegistration}>
          <div className="text-center">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-teal-100 border my-4 p-1 w-[350px] rounded-xl px-2"
            />
            <div className="text-center">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-teal-100 border my-2 p-1 w-[350px] rounded-xl px-2"
              />
            </div>
          </div>
          <div className="text-center">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-teal-100 border my-2  p-1 w-[350px] rounded-xl px-2"
            />
            <div className="text-center">
              <input
                type="number"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-teal-100 border my-2  p-1 w-[350px] rounded-xl px-2"
              />
            </div>
          </div>
          <div>
            <input
              type={"date"}
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="bg-teal-100 border my-2  p-1 w-[350px] rounded-xl px-2"
            />
          </div>
          <div className="text-center">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="bg-teal-100 border my-2  p-1 w-[350px] rounded-xl px-2"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div className="text-center">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-teal-100 border my-2  p-1 w-[350px] rounded-xl px-2"
              />
            </div>
          </div>

          <div className=" text-center">
            <p>
              Already Registered?
              <span className="font-bold">
                <Link to={"/signin"}>Login Now</Link>
              </span>
            </p>
          </div>

          <div>
            <button
              type="submit"
              className="bg-teal-600 text-2xl text-white p-2 px-3 my-4 rounded-2xl"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
