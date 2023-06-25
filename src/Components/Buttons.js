import { Button } from "@mui/material";
import React from "react";

const Buttons = ({ variant, textValue, onChange, style }) => {
  // const SlantedButtonStyle = {
  //   background: "#ff0000", // Set your desired background color
  //   color: "#ffffff", // Set your desired text color
  //   padding: "10px 20px", // Set your desired padding
  //   border: "none",
  //   position: "relative",
  //   overflow: "hidden",
  //   "&::before": {
  //     content: '""',
  //     position: "absolute",
  //     top: 0,
  //     right: 0,
  //     bottom: 0,
  //     left: 0,
  //     transform: "skewX(-20deg)",
  //     color: "white",
  //   },
  // };

  return (
    <>
      <Button variant={variant} onChange={onChange} sx={style}>
        {textValue}
      </Button>
    </>
  );
};

export default Buttons;
