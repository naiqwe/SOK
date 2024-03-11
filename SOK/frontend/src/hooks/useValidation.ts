import { useEffect, useState } from "react";
import validateEmail from "../service/helpers/validateEmail";

//TODO вынести интерфейс в другое место
export interface IValidations {
  minLength: number;
  inputType: "email" | "text" | "number" | "name";
}

export const useValidation = (value: string, validations: IValidations) => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (value) {
      setIsError(false);

      // Проверка email`a
      if (validations.inputType === "email" && !validateEmail(value)) {
        setIsError(true);
        setErrorMessage("Невалидный email");
        return;
      } else {
        setIsError(false);
      }

      // Проверка пароля
      if (
        validations.inputType === "text" &&
        value.length < validations.minLength
      ) {
        setIsError(true);
        setErrorMessage(
          `Поле должно быть минимум ${validations.minLength} символов`
        );
        return;
      } else {
        setIsError(false);
      }
    } else {
      setIsError(true);
      setErrorMessage("Поле не может быть пустым");
    }
  }, [value]);

  return {
    isError,
    errorMessage,
  };
};
