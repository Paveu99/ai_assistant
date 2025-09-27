'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import styles from "./style.module.scss"
import Image from "next/image";

export type LoginType = {
    username: string;
    password: string;
}

export const LoginForm = () => {

    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<LoginType>({
        mode: "onChange",
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = (data: LoginType) => {
        console.log(data);
    };

    return <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
            <div>
                <Image
                    src="/AI-Assistant-For-Developers-icon.jpg"
                    alt="AI Assistant Logo"
                    width={100}
                    height={50}
                    className="object-contain my-4 mx-auto rounded-2xl"
                />
                <h2>Sign in to AI Assistant for Developers</h2>
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
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    id="password"
                    label="Password"
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
                    type="password"
                    autoComplete="off"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 3,
                            message: "Password must be at least 3 characters long",
                        },
                    })}
                />
                <br />
            </div>
            <div className={styles.loginBtn}>
                <Button
                    type="submit"
                // disabled={!isValid || isPending}
                >
                    {/* {isPending ? "Logging in..." : "Log in"} */}
                    Sign in
                </Button>
            </div>
        </form>
    </div>
}