import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const Password = ({handlePasswordChange}) => {
    // const [showPassword, setShowPassword] = useState(false);

    // const handleClickShowPassword = () => {
    //     setShowPassword(!showPassword);
    // };

    // const [password, setPassword] = useState('');
    // const [newPassword, setNewPassword] = useState('');

    return (
        <input type = "password" onChange = {handlePasswordChange}/>
        // <TextField
        //     size="small"
        //     type={showPassword ? "text" : "password"}
        //     label="Enter password..."
        //     value={password}
        //     onChange={handlePassword}
        //     required={true}
        //     InputProps={{
        //         endAdornment: (
        //             <InputAdornment position="end">
        //                 <IconButton
        //                     aria-label="toggle password visibility"
        //                     onClick={handleClickShowPassword}
        //                     edge="end"
        //                 >
        //                     {showPassword ? <VisibilityOff /> : <Visibility />}
        //                 </IconButton>
        //             </InputAdornment>
        //         ),
        //     }}
        // />
    );
};

export default Password;