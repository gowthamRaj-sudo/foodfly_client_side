import { Badge, Typography } from "@mui/material";
import React from "react";
import logo from "../Assets/logo.svg";

import {
  BsSearch,
  BsCartFill,
  BsFillPersonFill,
  BsFillPersonPlusFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Navsection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          height: "10vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          //   background: "red",
        }}
      >
        <img src={logo} alt="logo" width={120} />
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyle: "none",
            alignItems: "center",
          }}
        >
          <li
            style={{ padding: "15px", cursor: "pointer" }}
            onClick={() => navigate("/home")}
          >
            Home
          </li>
          <li
            style={{ padding: "15px", cursor: "pointer" }}
            onClick={() => navigate("/menu")}
          >
            Menu
          </li>
          <li
            style={{ padding: "15px", cursor: "pointer" }}
            onClick={() => navigate("/blog")}
          >
            Blog
          </li>
          <li
            style={{ padding: "15px", cursor: "pointer" }}
            onClick={() => navigate("/shop")}
          >
            Shop
          </li>
          <li
            style={{ padding: "15px", display: "flex", alignItems: "center" }}
          >
            <span
              style={{
                background: "green",
                borderRadius: "20px",
                padding: "8px",
              }}
            >
              <BsSearch color="white" />
            </span>
          </li>
          <li
            style={{ padding: "15px", display: "flex", alignItems: "center" }}
          >
            {" "}
            <Badge badgeContent={4} color="warning">
              <span
                style={{
                  background: "green",
                  borderRadius: "20px",
                  padding: "8px",
                }}
              >
                <BsCartFill color="white" />
              </span>{" "}
            </Badge>
          </li>
          {/* <li
            style={{ padding: "15px", display: "flex", alignItems: "center" }}
          >
            <BsFillPersonFill />
            &nbsp; Login
          </li>
          <li
            style={{ padding: "15px", display: "flex", alignItems: "center" }}
          >
            <BsFillPersonPlusFill /> &nbsp; Signup
          </li> */}
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            style={{ padding: "15px", display: "flex", alignItems: "center" }}
          >
            <span
              style={{
                background: "green",
                borderRadius: "8px",
                padding: "7px",
              }}
            >
              <BsFillPersonFill color="white" />
            </span>
            &nbsp; Login
          </Typography>
          <Typography
            style={{ padding: "15px", display: "flex", alignItems: "center" }}
          >
            <span
              style={{
                background: "green",
                borderRadius: "8px",
                padding: "7px",
              }}
            >
              <BsFillPersonPlusFill color="white" />
            </span>
            &nbsp; Signup
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Navsection;
