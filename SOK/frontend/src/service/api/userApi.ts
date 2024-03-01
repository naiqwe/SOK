import { jwtDecode } from "jwt-decode";
import { $host } from "./index";
import { IRegisterUser } from "../../model/IRegisterUser";

export const registration = async (userData: IRegisterUser) => {
  const { data } = await $host.post("auth/registration", { ...userData });
  //localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

//TODO login
export const login = async (email: string, password: string) => {
  const { data } = await $host.post("auth/login", { email, password });
  //localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const response = await $host.post("auth/login", {});
  return response;
};
