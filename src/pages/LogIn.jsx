import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';
import { Button, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import swal from 'sweetalert';

import { userIn } from "../features/userSlice";
import { fetchLogIn } from "../api/userService";
import { resetCart } from "../features/cartSlice";

import "../styles/signUp-LogIn.scss";


const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let user = useSelector(state => state.user.currentUser);

    const save = async (data) => {
        try {
            let res = await fetchLogIn(data);
            swal({
                title: "Welcome back!",
                text: "You have successfully logged in.",
                icon: "success",
                timer: 1500,
                buttons: false,
            });
            console.log(res);
            if (user != null)
                dispatch(resetCart());
            dispatch(userIn(res.data));
            navigate("/coursesList");
        } catch (err) {
            console.log(err);
            if (err.response?.status === 404)
                swal("Error", err.response?.data?.message, "error");
            else
                swal("Error", err.response.data.title, "error");
        }
    }

    let { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className="container">
            <div className="contentContainer">
                <form noValidate className="form" onSubmit={handleSubmit(save)} style={{ maxWidth: "60%" }}>

                    <Typography variant="h4" component="h1" className="title">
                        Log In
                    </Typography>

                    <div className="formContainer">

                        <TextField
                            label="User name"
                            variant="outlined"
                            type="text"
                            className="textField"
                            {...register("userName", {
                                required: { value: true, message: "User name is required." },
                            })}
                            error={!!errors.userName}
                            helperText={errors.userName ? (
                                <span style={{ display: 'flex', color: 'red' }}>
                                    <ErrorOutlineIcon style={{ marginRight: 2, fontSize: 15 }} />
                                    {errors.userName.message}
                                </span>
                            ) : null}
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: errors.userName ? "red" : "#4dd0e1",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: errors.userName ? "red" : "#26c6da",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: errors.userName ? "red" : "#00acc1",
                                    }
                                }
                            }}
                        />

                        <TextField
                            label="Password"
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            className="textField"
                            {...register("password", {
                                required: { value: true, message: "Password is required." },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                    message:
                                        "The password must be at least 8 characters long and include letters and numbers.",
                                },
                            })}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            error={!!errors.password}
                            helperText={errors.password ? (
                                <span style={{ display: 'flex', color: 'red' }}>
                                    <ErrorOutlineIcon style={{ marginRight: 2, fontSize: 15 }} />
                                    {errors.password.message}
                                </span>
                            ) : null} sx={{
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: errors.password ? "red" : "#4dd0e1",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: errors.password ? "red" : "#26c6da",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: errors.password ? "red" : "#00acc1",
                                    }
                                }
                            }}
                        />

                        <Button type="submit" variant="contained" endIcon={<SendIcon />} className="button">
                            Send
                        </Button>
                        <p>New in the site?
                            <Link to="/signUp" style={{ color: "blue" }}> You can register here</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default LogIn;