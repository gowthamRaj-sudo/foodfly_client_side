import React from "react";
import navBackground from "../Assets/navBackground.png";
import Buttons from "../Components/Buttons";

const style = {
  background: "red",
  color: "white",
  borderRadius: "50px",
  fontWeight: "900",
  position: "absolute",
  // top: "15px",
  bottom: "15rem",
  left: "40rem",
  padding: "10px",
  // zIndex: "2",
  "&hover": {
    background: "transparent",
    color: "black",
  },
};
const styleBtn = {
  // background: "red",
  color: "white",
  borderRadius: "50px",
  fontWeight: "900",
  position: "absolute",
  // border: "red",
  // top: "15px",
  bottom: "15rem",
  left: "55rem",
  padding: "10px",
};
const BackgroundImage = () => {
  return (
    <div style={{ position: "relative" }}>
      <img src={navBackground} alt="background" width={"100%"} />
      <h1
        style={{
          color: "white",
          borderRadius: "50px",
          fontWeight: "900",
          position: "absolute",
          // border: "red",
          fontSize: "80px",
          top: "25rem",
          // bottom: "15rem",
          left: "40rem",
        }}
      >
        Hungry?
        <br /> Your are in the <br />
        Right place <br />
        <span style={{ fontSize: "16px" }}>
          Imagine devouring delicious, healthy meals daily without so much as
          lifting a pot for your every day life.
        </span>
      </h1>
      <Buttons variant={"outlined"} textValue={"Online Order"} style={style} />
      <Buttons
        variant={"outlined"}
        textValue={"How it work"}
        style={styleBtn}
      />
    </div>
  );
};

export default BackgroundImage;
