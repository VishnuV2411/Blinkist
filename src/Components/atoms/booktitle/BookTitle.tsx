import { Typography } from "@mui/material";
import React from "react";

interface BookDet{
    bookName:string,
}

const BookTitle = (props:BookDet) => {
    return (
        <>
            <Typography>
                {props.bookName}
            </Typography>
        </>
    );
};

export default BookTitle;