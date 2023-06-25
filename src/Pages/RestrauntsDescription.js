import { Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "../Assets/easytoOrder.svg";
import image2 from "../Assets/bestProduct.svg";
import image3 from "../Assets/fastDelivery.svg";
import chief from "../Assets/chief.png";
import Buttons from "../Components/Buttons";

const style = {
  color: "black",
  borderRadius: "50px",
  fontWeight: "900",
  background: "red",
};

const RestrauntsDescription = () => {
  return (
    <>
      <br />
      <Grid container spacing={2}>
        <Grid item xl={2.5} />
        <Grid item xl={3}>
          <img src={image1} alt="image1" />
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Easy to order
          </Typography>
          <p style={{ width: "60%", color: "grey" }}>
            Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.
          </p>
        </Grid>
        <Grid item xl={3}>
          <img src={image2} alt="image1" />
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Best Food Quality
          </Typography>
          <p style={{ width: "60%", color: "grey" }}>
            Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.
          </p>
        </Grid>
        <Grid item xl={3}>
          <img src={image3} alt="image1" />
          <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
            Fastest Delivery
          </Typography>
          <p style={{ width: "60%", color: "grey" }}>
            Laoreet donec ultrices tincidunt arcu. Ultrices auctor augue lectus.
          </p>
        </Grid>
        <Grid item xl={2} />
        <Grid item xl={4}>
          <img src={chief} alt="cheif" />
        </Grid>

        <Grid item xl={3} m={5}>
          <br />
          <h5>Our Menus</h5>

          <h1>Meal plans made for your lifestyle healthy</h1>

          <p style={{ color: "grey" }}>
            Varius morbi enim nunc faucibus. Augue neque gravida in fermentum et
            sollicitudin ac orci phasellus. Feugiat sed lectus vestibulum mattis
            ullamcorper velit. Etiam dignissim diam quis enim lobortis
            scelerisque.
          </p>
          <p style={{ color: "grey" }}>
            viverra ipsum nunc aliquet bibendum enim facilisis gravida. Nisi
            quis eleifend quam adipiscing vitae proin sagittis nisl the over
            thinks for your rhoncus.
          </p>
          <br />
          <br />
          <Buttons
            variant={"outlined"}
            textValue={"View or Menu"}
            style={style}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default RestrauntsDescription;
