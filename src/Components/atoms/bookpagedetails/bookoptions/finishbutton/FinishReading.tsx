import { Button } from "@mui/material";
import React from "react";
import customStyle from "../../../../../Theme"

interface Handle {
    //handleFinish: {item: string} => void;
    bookName: string;
    btn: boolean;
}

const FinishReading = (props: Handle) => {
    // const set = () => {
    //     props.handleFinish(props.bookName);
    // };

    const classes = customStyle();
    return (
        <Button 
            //onClick={set}
            className={classes.finishReading}
            sx={{
                display: props.btn ? "none" : "",
                "&:hover": {
                    backgroundColor: "#2CE080",
                },
            }}
            variant="contained"
            component="button"
        >
            Finished Reading
        </Button>
    );
};

export default FinishReading;