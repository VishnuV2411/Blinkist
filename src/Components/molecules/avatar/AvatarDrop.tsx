import { Grid } from "@mui/material";
import React from "react";
import useStyle from "../../../Theme";
import AvatarLogin from "../../atoms/avatar/LoginAvatar";
import NavDown from "../../atoms/nav/nav-down/NavDown";

const AvatarDrop = () => {
  const classes = useStyle();
  return (
    <Grid container data-testid="avatarDrop" className={classes.avatarDrop}>
      <Grid item>
        <AvatarLogin name="S" />
      </Grid>
      <Grid item className={classes.avatarNavDown}>
        <NavDown />
      </Grid>
    </Grid>
  );
};

export default AvatarDrop;