import { Grid } from "@mui/material";
import React from "react";
import Buttons from "../Components/Buttons";

const FoodCatagories = () => {
  const SlantedButtonStyle = {
    transform: "skewX(-25deg)",
    color: "white",
    background: "red",
    "&:hover": {
      background: "black",
    },
  };
  return (
    <>
      <div
        style={{
          background: "#FBAD41",
          // width: "100%",
          height: "90vh",
          padding: "15px",
          textAlign: "center",
        }}
      >
        <br />
        <h3 style={{ textAlign: "center", color: "white" }}>Our Item's</h3>
        <h1 style={{ textAlign: "center", color: "white" }}>Popular Foods</h1>
        {/* <Grid container spacing={2}>
          <Grid item xl={7}>
            <Buttons
              textValue={"All"}
              variant={"contained"}
              style={{ ...SlantedButtonStyle }}
            />
            <Buttons
              textValue={"All"}
              variant={"contained"}
              style={{ ...SlantedButtonStyle }}
            />
            <Buttons textValue={"All"} variant={"contained"} />
            <Buttons textValue={"All"} variant={"contained"} />
            <Buttons textValue={"All"} variant={"contained"} />
          </Grid>
          <Grid item xl={1}>
            <Buttons textValue={"All"} variant={"contained"} />
          </Grid>
          <Grid item xl={1}>
            <Buttons textValue={"All"} variant={"contained"} />
          </Grid>
          <Grid item xl={1}>
            <Buttons textValue={"All"} variant={"contained"} />
          </Grid>
        </Grid> */}
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyle: "none",
          }}
        >
          <li>
            <Buttons
              textValue={"All"}
              variant={"contained"}
              style={{ ...SlantedButtonStyle }}
            />
          </li>
          <li>
            <Buttons
              textValue={"Veg"}
              variant={"contained"}
              style={{ ...SlantedButtonStyle }}
            />
          </li>
          <li>
            <Buttons
              textValue={"Non_veg"}
              variant={"contained"}
              style={{ ...SlantedButtonStyle }}
            />
          </li>
          <li>
            <Buttons
              textValue={"Fast_food"}
              variant={"contained"}
              style={{ ...SlantedButtonStyle }}
            />
          </li>
          <li>
            <Buttons
              textValue={"Pizza"}
              variant={"contained"}
              style={{ ...SlantedButtonStyle }}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default FoodCatagories;
