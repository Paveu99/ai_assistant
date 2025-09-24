'use client';

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@mui/material";
import styles from "./style.module.scss"

export type LoginType = {
    login: string;
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
            login: "",
            password: "",
        },
    });

    const onSubmit = (data: LoginType) => {
        console.log(data);
    };

    return <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
            <div>
                <h2>Login Form</h2>
                <Input
                    id="login"
                    placeholder="Login"
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '5px',
                        padding: '4px',
                        width: '300px',
                        marginTop: '5px'
                    }}
                    type="text"
                    autoComplete="off"
                    {...register("login", {
                        required: "Login is required",
                        minLength: {
                            value: 8,
                            message: "Login must be at least 8 characters long",
                        },
                    })}
                />
                <br />
                {errors.login && (
                    <small className="error">{errors.login.message}</small>
                )}
            </div>
            <div>
                <Input
                    id="password"
                    placeholder="Password..."
                    style={{
                        backgroundColor: 'white',
                        borderRadius: '5px',
                        padding: '4px',
                        width: '300px',
                        marginTop: '5px'
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
                {errors.password && (
                    <small className="error">{errors.password.message}</small>
                )}
            </div>
            <div className={styles.loginBtn}>
                <Button
                    type="submit"
                // disabled={!isValid || isPending}
                >
                    {/* {isPending ? "Logging in..." : "Log in"} */}
                    Log in
                </Button>
            </div>
        </form>
    </div>
}