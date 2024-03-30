import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, registration, logout, check } from "../../service/api/userApi";
import { IRegisterUser } from "../../model/IRegisterUser";

// TODO обработать ошибку
export const registerUser = createAsyncThunk(
  "user/register",
  async (user: IRegisterUser, thunkAPI) => {
    try {
      const userData: any = await registration(user);
      localStorage.setItem("userName", userData.userName);

      console.log(userData);
      return userData;
    } catch (error: any) {
      console.log({ error: error.response.data });

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

//TODO Login
export const loginUser = createAsyncThunk(
  "user/login",
  async (user: any, thunkAPI) => {
    try {
      const userData: any = await login(user.email, user.password);
      localStorage.setItem("userName", userData.userName);

      console.log(userData);
      return userData;
    } catch (error: any) {
      console.log({ error: error.response.data });

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const checkUser = createAsyncThunk("user/check", async (_, thunkAPI) => {
  try {
    const userData: any = await check();
    console.log(userData);
    localStorage.setItem("userName", userData.userName);
    return userData;
  } catch (error: any) {
    console.log({ error: error });
    localStorage.clear();
    return thunkAPI.rejectWithValue(error);
  }
});

export const logoutUser = createAsyncThunk("auth/logout", () => {
  logout();
});
