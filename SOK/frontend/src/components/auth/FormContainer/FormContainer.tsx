import style from "./formContainer.module.css";
import { RegisterForm } from "../authForm/RegisterForm";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  registerUser,
  loginUser,
} from "../../../store/reducers/ActionCreators";
import { IRegisterUser } from "../../../model/IRegisterUser";
import { useState } from "react";
import { LoginForm } from "../loginForm/LoginForm";

interface FormContainerProps {
  closeModal: Function;
  type: "login" | "register";
}

interface ITokenData {
  email: string;
  exp: number;
  iat: number;
}

export const FormContainer: React.FC<FormContainerProps> = ({
  closeModal,
  type,
}) => {
  const [error, setError] = useState("");
  const dispath = useAppDispatch();
  const nav = useNavigate();

  const handleRegisterEvent = (e: any, userData: IRegisterUser) => {
    e.preventDefault();

    dispath(registerUser(userData))
      .unwrap()
      .then((res: ITokenData) => {
        console.log(res);
        nav("/");
        closeModal();
        setError("");
      })
      .catch((err) => setError(err.message));
  };

  //TODO login
  const handleLoginEvent = (e: any, email: string, password: string) => {
    e.preventDefault();
    const userCreditals = {
      email: email,
      password: password,
    };
    console.log(userCreditals);

    dispath(loginUser(userCreditals))
      .unwrap()
      .then((res: any) => {
        console.log(res.payload);
        nav("/");
        closeModal();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={style.container}>
      <div className={style.formWrapper}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          {type == "login" ? "Вход" : "Регистрация"}
        </h1>
        {type == "register" ? (
          <RegisterForm handleRegister={handleRegisterEvent}></RegisterForm>
        ) : (
          <LoginForm handleLogin={handleLoginEvent}></LoginForm>
        )}
      </div>
      {error && <h2>Ошибка:{error}</h2>}
    </div>
  );
};
