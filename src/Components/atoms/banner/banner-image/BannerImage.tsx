import { Card, CardMedia } from "@mui/material";
import React from "react";
import bannerimg from "../../assets/bannerimg.png";

export const BannerImage = () => {

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