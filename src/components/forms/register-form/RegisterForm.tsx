'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, IconButton, InputAdornment, InputLabel, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styles from "./styles.module.scss"
import Image from "next/image";

export type RegisterType = {
    email: string;
    name: string;
    surname: string;
    username: string;
    password: string;
    confirmPassword: string;
}

export const RegisterForm = () => {

    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => setShowPassword((prev) => !prev);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
        watch
    } = useForm<RegisterType>({
        mode: "onChange",
        defaultValues: {
            username: "",
            email: "",
            name: "",
            surname: "",
            password: "",
            confirmPassword: ""
        },
    });

    const onSubmit = (data: RegisterType) => {
        console.log(data);
    };

    return <div className={styles.registerContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
            <div>
                <Image
                    src="/AI-Assistant-For-Developers-icon.jpg"
                    alt="AI Assistant Logo"
                    width={100}
                    height={50}
                    className="object-contain my-4 mx-auto rounded-2xl"
                />
                <h2>Register to AI Assistant for Developers</h2>
                <TextField
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    id="name"
                    label="Name"
                    size="small"
                    variant="filled"
                    slotProps={{
                        input: {
                            style: {
                                backgroundColor: "#f0f0f0",
                                color: "black",
                                borderRadius: "5px",
                                padding: "4px",
                                width: '300px',
                            },
                        },
                    }}
                    sx={{
                        "& .MuiInputLabel-root": { color: "GrayText" }
                    }}
                    type="text"
                    autoComplete="off"
                    {...register("name", {
                        required: "Name is required"
                    })}
                />
                <br />
            </div>
            <div>
                <TextField
                    error={!!errors.surname}
                    helperText={errors.surname?.message}
                    id="surname"
                    label="Surname"
                    size="small"
                    variant="filled"
                    slotProps={{
                        input: {
                            style: {
                                backgroundColor: "#f0f0f0",
                                color: "black",
                                borderRadius: "5px",
                                padding: "4px",
                                width: '300px',
                            },
                        },
                    }}
                    sx={{
                        "& .MuiInputLabel-root": { color: "GrayText" }
                    }}
                    type="text"
                    autoComplete="off"
                    {...register("surname", {
                        required: "Surname is required"
                    })}
                />
                <br />
            </div>
            <div>
                <TextField
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    id="email"
                    label="Email"
                    size="small"
                    variant="filled"
                    slotProps={{
                        input: {
                            style: {
                                backgroundColor: "#f0f0f0",
                                color: "black",
                                borderRadius: "5px",
                                padding: "4px",
                                width: '300px',
                            },
                        },
                    }}
                    sx={{
                        "& .MuiInputLabel-root": { color: "GrayText" }
                    }}
                    type="text"
                    autoComplete="off"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address",
                        },
                    })}
                />
                <br />
            </div>
            <div>
                <TextField
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    id="username"
                    label="Username"
                    size="small"
                    variant="filled"
                    slotProps={{
                        input: {
                            style: {
                                backgroundColor: "#f0f0f0",
                                color: "black",
                                borderRadius: "5px",
                                padding: "4px",
                                width: '300px',
                            },
                        },
                    }}
                    sx={{
                        "& .MuiInputLabel-root": { color: "GrayText" }
                    }}
                    type="text"
                    autoComplete="off"
                    {...register("username", {
                        required: "Username is required",
                        minLength: {
                            value: 8,
                            message: "Username must be at least 8 characters long",
                        },
                    })}
                />
                <br />
            </div>
            <div>
                <TextField
                    id="password"
                    label="Password"
                    variant="filled"
                    size="small"
                    type={showPassword ? "text" : "password"}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    autoComplete="off"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 3,
                            message: "Password must be at least 3 characters long",
                        },
                    })}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end" sx={{ mr: 1 }}>
                                    <IconButton
                                        aria-label={showPassword ? "hide password" : "show password"}
                                        onClick={toggleShowPassword}
                                        edge="end"
                                        sx={{ color: "dodgerblue" }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            style: {
                                backgroundColor: "#f0f0f0",
                                color: "black",
                                borderRadius: "5px",
                                padding: "4px",
                                width: "300px"
                            },
                        },
                    }}
                    sx={{
                        "& .MuiInputLabel-root": { color: "GrayText" },
                    }}
                />
                <br />
            </div>
            <div>
                <TextField
                    id="password2"
                    label="Confirm password"
                    variant="filled"
                    size="small"
                    type={showPassword ? "text" : "password"}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                    autoComplete="off"
                    {...register("confirmPassword", {
                        required: "Confirm the password",
                        validate: (value) =>
                            value === watch("password") || "Passwords must match",
                    })}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end" sx={{ mr: 1 }}>
                                    <IconButton
                                        aria-label={showPassword ? "hide password 2" : "show password 2"}
                                        onClick={toggleShowPassword}
                                        edge="end"
                                        sx={{ color: "dodgerblue" }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                            style: {
                                backgroundColor: "#f0f0f0",
                                color: "black",
                                borderRadius: "5px",
                                padding: "4px",
                                width: "300px"
                            },
                        },
                    }}
                    sx={{
                        "& .MuiInputLabel-root": { color: "GrayText" },
                    }}
                />
                <br />
            </div>
            <div className={styles.registerBtn}>
                <Button
                    type="submit"
                    disabled={!isValid
                        // || isPending
                    }
                >
                    {/* {isPending ? "Logging in..." : "Log in"} */}
                    Register
                </Button>
            </div>
        </form>
    </div>
}