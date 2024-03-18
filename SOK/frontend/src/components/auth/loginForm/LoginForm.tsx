import React from "react";
import { useInput } from "../../../hooks/useInput";
import { Box, TextField } from "@mui/material";
import style from "./loginForm.module.css";

interface LoginFormProps {
  handleLogin: Function;
}

export const LoginForm: React.FC<LoginFormProps> = ({ handleLogin }) => {
  const email = useInput(
    "",
    { minLength: 8, inputType: "email" },
    {
      key: "email",
    }
  );
  const password = useInput("", { minLength: 8, inputType: "text" });

  return (
    <form>
      <div className={style.formInner}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className={style.formsContainer}>
            <div className={style.inputWrapper}>
              <TextField
                label="Email"
                name="email"
                type="email"
                placeholder="email"
                id="email"
                error={email.isDirty && email.isError}
                helperText={
                  email.isDirty && email.isError && email.errorMessage
                }
                value={email.value}
                onChange={(e) => email.onChange(e)}
                onBlur={email.onBlur}
              ></TextField>
            </div>
            <div className={style.inputWrapper}>
              <TextField
                label="Пароль"
                name="password"
                type="password"
                placeholder="password"
                id="password"
                error={password.isDirty && password.isError}
                helperText={
                  password.isDirty && password.isError && password.errorMessage
                }
                value={password.value}
                onChange={(e) => password.onChange(e)}
                onBlur={password.onBlur}
              ></TextField>
            </div>
          </div>
        </Box>

        <button
          disabled={email.isError || password.isError}
          onClick={(e) => handleLogin(e, email.value, password.value)}
        >
          {"Войти"}
        </button>
      </div>
    </form>
  );
};
