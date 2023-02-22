import { useState } from "react";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

const Login = ({ onLogin }) => {
  const { register, handleSubmit } = useForm();

  const handleLogin = (data) => {
    onLogin(data.login);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          className={styles.champ}
          type="text"
          id="login"
          {...register("login", { required: true })}
        />
        <Button type="submit" variant="outlined">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
