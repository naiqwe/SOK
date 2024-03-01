import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, registration } from "../../service/api/userApi";
import { IRegisterUser } from "../../model/IRegisterUser";

// TODO обработать ошибку
export const registerUser = createAsyncThunk(
  "user/register",
  async (user: IRegisterUser, thunkAPI) => {
    const userData = await registration(user);
    console.log(userData);
    return userData;
  }
);

//TODO Login
export const loginUser = createAsyncThunk(
  "user/login",
  async (user: any, thunkAPI) => {
    const userData = await login(user.email, user.password);
    console.log(userData);
    return userData;
  }
);
