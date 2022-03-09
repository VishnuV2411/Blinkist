import { Typography } from "@mui/material";
import React from "react";

interface Author {
    authName: string;
}

const AuthorName = (props:Author) => {
    return (
        <>
            <Typography>
                {props.authName}
            </Typography>
        </>
    );
};

export default AuthorName;