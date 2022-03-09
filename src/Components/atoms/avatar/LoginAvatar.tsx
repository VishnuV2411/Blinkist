import { Avatar } from "@mui/material";

interface Handle {
    name: string;
  }

const LoginAvatar = (props: Handle) => {
    return (
        <Avatar sx={{ bgcolor: "#69A6E3"}}>A</Avatar>
    );
};

export default LoginAvatar;