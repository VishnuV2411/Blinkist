import { Card, CardMedia } from "@mui/material";
import React from "react";
import bannerimg from "../../assets/bannerimg.png";
import customStyle from "../../../../Theme";

export const BannerImage = () => {
  const classes = customStyle();
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          image={bannerimg}
          alt="main-image"
          data-testid="BannerImage"
        />
      </Card>
    </>
  );
};