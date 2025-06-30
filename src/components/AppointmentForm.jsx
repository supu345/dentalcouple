import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import { Context } from "../main"; // Make sure the Context is properly set up

const AppointmentForm = () => {
  const { isAuthenticated } = useContext(Context); // Access the authentication state from Context

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const departmentsArray = ["Select Dept.", "Dentist", "Radiology"];

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/user/doctors",
          { withCredentials: true }
        );

        if (data.success) {
          setDoctors(data.doctors);
          console.log("Doctors Data:", data.doctors);
        } else {
          console.log("Failed to fetch doctors:", data.message);
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      // Show toast notification to login first
      toast.error("You need to login first to book an appointment.");
      return;
    }

    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:5000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("Pediatrics");
      setDoctorFirstName("");
      setDoctorLastName("");
      setHasVisited(false);
      setAddress("");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="">
        {/*Parallax */}
        <div
          className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/69686/pexels-photo-69686.jpeg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative flex flex-col items-center ">
            <p className="text-center text-white text-5xl font-bold">
              Appointment
            </p>
            <div className="relative flex flex-row gap-2 items-center mt-5">
              <p className="text-center text-white text-xl ">Home</p>
              <p className="text-center text-white text-xl ">/ Appointment</p>
            </div>
          </div>
        </div>

        <div className="px-5 flex flex-col md:flex-row lg:flex-row gap-7 mt-6">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold py-5">Book Your Appointment</h2>
            <p className="items-start">
              Book your appointment today for expert care tailored to your
              needs.
            </p>

            <form onSubmit={handleAppointment}>
              <div className="text-center ">
                <select
                  value={department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                    setDoctorFirstName("");
                    setDoctorLastName("");
                  }}
                  className="bg-teal-100 border my-4 p-2 w-full text-gray-500 rounded-md px-2"
                >
                  {departmentsArray.map((depart, index) => {
                    return (
                      <option
                        value={depart}
                        key={index}
                        className="bg-teal-100 border my-2 p-1 w-[350px] rounded-xl px-2"
                      >
                        {depart}
                      </option>
                    );
                  })}
                </select>
              </div>

              <select
                value={`${doctorFirstName} ${doctorLastName}`}
                onChange={(e) => {
                  const [firstName, lastName] = e.target.value.split(" ");
                  setDoctorFirstName(firstName);
                  setDoctorLastName(lastName);
                }}
                disabled={!department}
                className="bg-teal-100 border my-2 p-2 w-full text-gray-500 rounded-md px-2"
              >
                <option value="">Select Doctor</option>
                {doctors
                  .filter((doctor) => doctor.doctorDepartment === department)
                  .map((doctor, index) => {
                    console.log("Filtered Doctor:", doctor); // Debug log
                    return (
                      <option
                        value={`${doctor.firstName} ${doctor.lastName}`}
                        key={index}
                      >
                        {doctor.firstName} {doctor.lastName}
                      </option>
                    );
                  })}
              </select>

              {/* Personal Info Fields */}
              <div className="flex flex-col md:flex-row items-center gap-5 md:items-start">
                <div className="text-center">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-teal-100 border my-4 p-2 w-[300px] rounded-md px-2"
                  />
                </div>
                <div className="text-center">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-teal-100 border my-4 p-2 w-[300px] rounded-md px-2"
                  />
                </div>
              </div>
              {/* More Fields */}
              <div className="flex flex-col md:flex-row items-center gap-5 md:items-start">
                <div className="text-center">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-teal-100 border my-4 p-2 w-[300px] rounded-md px-2"
                  />
                </div>
                <div className="text-center">
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-teal-100 border my-4 p-2 w-[300px] rounded-md px-2"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-5 md:items-start">
                <div className="">
                  <label
                    htmlFor="Date of Birth"
                    className="block text-gray-600 font-medium "
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="bg-teal-100 border my-4 p-2 w-[190px] text-gray-500 rounded-md px-2"
                  />
                </div>

                <div className="">
                  <label
                    htmlFor="Gender"
                    className="block text-gray-600 font-medium "
                  >
                    Gender
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="bg-teal-100 border my-4 p-2 w-[190px] text-gray-500 rounded-md px-2"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className="">
                  <label
                    htmlFor="appointmentDate"
                    className="block text-gray-600 font-medium mb-4"
                  >
                    Appointment Date
                  </label>
                  <input
                    id="appointmentDate"
                    type="date"
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="bg-teal-100 border p-2 w-[200px] rounded-md"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="text-center ">
                <textarea
                  rows="4"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="bg-teal-100 border my-4 p-1  w-full rounded-xl px-2"
                />
              </div>

              {/* Checkbox for HasVisited */}
              <div className="">
                <p>Have you visited before?</p>
                <input
                  type="checkbox"
                  checked={hasVisited}
                  onChange={(e) => setHasVisited(e.target.checked)}
                />
              </div>

              <button className="bg-teal-600 text-2xl text-white p-2 px-3 my-4 rounded-2xl">
                GET APPOINTMENT
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 py-9">
            <img
              src="https://images.pexels.com/photos/3845807/pexels-photo-3845807.jpeg"
              alt="Appointment"
              className="h-[600px] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentForm;
