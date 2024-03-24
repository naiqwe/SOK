import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, registration, logout, check } from "../../service/api/userApi";
import { IRegisterUser } from "../../model/IRegisterUser";

// TODO обработать ошибку
export const registerUser = createAsyncThunk(
  "user/register",
  async (user: IRegisterUser, thunkAPI) => {
    try {
      const userData = await registration(user);
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
      const userData = await login(user.email, user.password);
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
    const userData = await check();
    console.log(userData);
    return userData;
  } catch (error: any) {
    console.log({ error: error });

    return thunkAPI.rejectWithValue(error);
  }
});

export const logoutUser = createAsyncThunk("auth/logout", () => {
  logout();
});
