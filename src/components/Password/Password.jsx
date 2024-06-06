import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import './Password.css'

const Password = ({handlePasswordChange, placeholderText}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleVisibilityChange = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className='password-container'>
            <input type = {showPassword ? `text` : `password`} placeholder={placeholderText}
                   onChange={handlePasswordChange} className = 'password-field'/>
            {showPassword ? <Visibility onClick={handleVisibilityChange} className = "eye"/> : <VisibilityOff onClick={handleVisibilityChange} className = "eye"/>}
        </div>
    );
};

export default Password;