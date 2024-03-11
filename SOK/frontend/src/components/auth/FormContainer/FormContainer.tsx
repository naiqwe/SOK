import style from "./formContainer.module.css";
import { RegisterForm } from "../authForm/RegisterForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  registerUser,
  loginUser,
} from "../../../store/reducers/ActionCreators";
import { IRegisterUser } from "../../../model/IRegisterUser";

export const FormContainer: React.FC<any> = ({ closeModal }) => {
  const dispath = useAppDispatch();
  const nav = useNavigate();

  const handleRegisterEvent = (e: any, userData: IRegisterUser) => {
    e.preventDefault();

    dispath(registerUser(userData))
      .unwrap()
      .then((res: PayloadAction<any>) => {
        console.log(res.payload);
        nav("/");
        closeModal();
      })
      .catch((err) => console.log(err));
  };

  //TODO login
  const handleLoginEvent = (e: any, email: string, password: string) => {
    e.preventDefault();
    const userCreditals = {
      email,
      password,
    };

    dispath(loginUser(userCreditals)).then((res: PayloadAction<any>) => {
      console.log(res.payload);
      nav("/");
      closeModal();
    });
  };

  return (
    <div className={style.container}>
      <div className={style.formWrapper}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Регистрация
        </h1>
        <RegisterForm handleRegister={handleRegisterEvent}></RegisterForm>
      </div>
    </div>
  );
};
