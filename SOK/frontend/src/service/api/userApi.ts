import { jwtDecode } from "jwt-decode";
import { $authHost, $host } from "./index";
import { IRegisterUser } from "../../model/IRegisterUser";
import { AxiosResponse } from "axios";

interface ITokenData {
  email: string;
  id: number;
  userName: string;
  exp: number;
  iat: number;
}

export const registration = async (userData: IRegisterUser) => {
  const { data } = await $host.post("auth/registration", { ...userData });
  localStorage.setItem("token", data.token);
  const tokenData: ITokenData = jwtDecode(data.token);
  return tokenData;
};

//TODO login
export const login = async (
  email: string,
  password: string
): Promise<AxiosResponse> => {
  const { data } = await $host.post("auth/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodeToken: ITokenData = jwtDecode(token);
    const { data } = await $authHost.get("auth/check", {
      params: {
        email: decodeToken.email,
        id: decodeToken.id,
        userName: decodeToken.userName,
      },
    });
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
  } else {
    throw "Не авторизован";
  }
};

export const logout = async () => {
  localStorage.clear();
};
