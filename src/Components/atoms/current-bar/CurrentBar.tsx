import { Typography } from "@mui/material";
import React from "react";
import useStyle from "../../../Theme";

const CurrentBar = () => {
    const classes = useStyle();
    return (
        <Typography 
            className={classes.currentBar}
        ></Typography>
    );
};

export default CurrentBar;