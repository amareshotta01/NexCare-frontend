import React, { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
// eslint-disable-next-line react/prop-types

const cookies = new Cookies();

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    cookies.remove("fullName");
    cookies.remove("role");
    cookies.remove("streamToken");
    cookies.remove("token");
    cookies.remove("userId");

    window.location.reload();

    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Profile
        </button>

        <div className="mt-[100px] w-full">
          <button
            onClick={() => {
              navigate("/doctors/chat");
            }}
            className="w-full bg-blue-600 p-3 text-[16px] leading-7 rounded-md text-white"
          >
            NexCare Chat
          </button>
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] mt-4 p-3 text-[16px] leading-7 rounded-md text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
