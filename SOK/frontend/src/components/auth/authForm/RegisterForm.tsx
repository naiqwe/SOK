import style from "./authForm.module.css";
import { useInput } from "../../../hooks/useInput";
import { Box, TextField } from "@mui/material";
import { IRegisterUser } from "../../../model/IRegisterUser";

interface AuthFormProps {
  handleRegister: Function;
}

export const RegisterForm: React.FC<AuthFormProps> = ({ handleRegister }) => {
  const email = useInput(
    "",
    { minLength: 8, inputType: "email" },
    {
      key: "email",
    }
  );
  const password = useInput("", { minLength: 8, inputType: "text" });
  const firstName = useInput(
    "",
    { minLength: 3, inputType: "text" },
    {
      key: "firstName",
    }
  );
  const lastName = useInput(
    "",
    { minLength: 3, inputType: "text" },
    {
      key: "lastName",
    }
  );
  const secondName = useInput(
    "",
    { minLength: 3, inputType: "text" },
    {
      key: "secondName",
    }
  );
  const userName = useInput("", { minLength: 4, inputType: "text" });

  const addrIndex = useInput(
    "",
    { minLength: 5, inputType: "text" },
    {
      key: "addrIndex",
    }
  );
  const addrCity = useInput(
    "",
    { minLength: 3, inputType: "text" },
    {
      key: "addrCity",
    }
  );
  const addrSreet = useInput(
    "",
    { minLength: 3, inputType: "text" },
    {
      key: "addrSreet",
    }
  );
  const addrHouse = useInput(
    "",
    { minLength: 1, inputType: "text" },
    {
      key: "addrHouse",
    }
  );
  const addrStructure = useInput(
    "",
    { minLength: 1, inputType: "text" },
    {
      key: "addrStructure",
    }
  );
  const addrApart = useInput(
    "",
    { minLength: 1, inputType: "text" },
    {
      key: "addrApart",
    }
  );

  const userData: IRegisterUser = {
    email: email.value,
    password: password.value,
    firstName: firstName.value,
    lastName: lastName.value,
    secondName: secondName.value,
    addrIndex: addrIndex.value,
    addrCity: addrCity.value,
    addrSreet: addrSreet.value,
    addrHouse: addrHouse.value,
    addrStructure: addrStructure.value,
    addrApart: addrApart.value,
    userName: userName.value,
  };

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
            <div className={style.inputWrapper}>
              <TextField
                label="Имя"
                name="firstName"
                type="text"
                id="firstName"
                error={firstName.isDirty && firstName.isError}
                helperText={
                  firstName.isDirty &&
                  firstName.isError &&
                  firstName.errorMessage
                }
                value={firstName.value}
                onChange={(e) => firstName.onChange(e)}
                onBlur={firstName.onBlur}
              ></TextField>
            </div>
            <div className={style.inputWrapper}>
              <TextField
                label="Фамилия"
                name="lastName"
                type="text"
                id="lastName"
                error={lastName.isDirty && lastName.isError}
                helperText={
                  lastName.isDirty && lastName.isError && lastName.errorMessage
                }
                value={lastName.value}
                onChange={(e) => lastName.onChange(e)}
                onBlur={lastName.onBlur}
              ></TextField>
            </div>
            <div className={style.inputWrapper}>
              <TextField
                label="Отчество"
                name="secondName"
                type="text"
                id="secondName"
                error={secondName.isDirty && secondName.isError}
                helperText={
                  secondName.isDirty &&
                  secondName.isError &&
                  secondName.errorMessage
                }
                value={secondName.value}
                onChange={(e) => secondName.onChange(e)}
                onBlur={secondName.onBlur}
              ></TextField>
            </div>

            <div className={style.inputWrapper}>
              <TextField
                label="Никнейм"
                name="userName"
                type="text"
                id="userName"
                error={userName.isDirty && userName.isError}
                helperText={
                  userName.isDirty && userName.isError && userName.errorMessage
                }
                value={userName.value}
                onChange={(e) => userName.onChange(e)}
                onBlur={userName.onBlur}
              ></TextField>
            </div>
          </div>
          <div className={style.formsContainer}>
            <div className={style.inputWrapper}>
              <TextField
                label="Индекс"
                name="addrIndex"
                type="text"
                id="addrIndex"
                error={addrIndex.isDirty && addrIndex.isError}
                helperText={
                  addrIndex.isDirty &&
                  addrIndex.isError &&
                  addrIndex.errorMessage
                }
                value={addrIndex.value}
                onChange={(e) => addrIndex.onChange(e)}
                onBlur={addrIndex.onBlur}
              ></TextField>
            </div>
            <div className={style.inputWrapper}>
              <TextField
                label="Город"
                name="addrCity"
                type="text"
                id="addrCity"
                error={addrCity.isDirty && addrCity.isError}
                helperText={
                  addrCity.isDirty && addrCity.isError && addrCity.errorMessage
                }
                value={addrCity.value}
                onChange={(e) => addrCity.onChange(e)}
                onBlur={addrCity.onBlur}
              ></TextField>
            </div>
            <div className={style.inputWrapper}>
              <TextField
                label="Улица"
                name="addrSreet"
                type="text"
                id="addrSreet"
                error={addrSreet.isDirty && addrSreet.isError}
                helperText={
                  addrSreet.isDirty &&
                  addrSreet.isError &&
                  addrSreet.errorMessage
                }
                value={addrSreet.value}
                onChange={(e) => addrSreet.onChange(e)}
                onBlur={addrSreet.onBlur}
              ></TextField>
            </div>
            <div className={style.inputWrapper}>
              <TextField
                label="Дом"
                name="addrHouse"
                type="text"
                id="addrHouse"
                error={addrHouse.isDirty && addrHouse.isError}
                helperText={
                  addrHouse.isDirty &&
                  addrHouse.isError &&
                  addrHouse.errorMessage
                }
                value={addrHouse.value}
                onChange={(e) => addrHouse.onChange(e)}
                onBlur={addrHouse.onBlur}
              ></TextField>
            </div>
            <div className={style.inputWrapper}>
              <TextField
                label="Строение"
                name="addrStructure"
                type="text"
                id="addrStructure"
                value={addrStructure.value}
                onChange={(e) => addrStructure.onChange(e)}
                onBlur={addrStructure.onBlur}
              ></TextField>
            </div>
            <div className={style.inputWrapper}>
              <TextField
                label="Апартаменты"
                name="addrApart"
                type="addrApart"
                id="addrApart"
                value={addrApart.value}
                onChange={(e) => addrApart.onChange(e)}
                onBlur={addrApart.onBlur}
              ></TextField>
            </div>
          </div>
        </Box>

        <button
          disabled={
            email.isError ||
            password.isError ||
            firstName.isError ||
            lastName.isError ||
            secondName.isError ||
            addrIndex.isError ||
            addrCity.isError ||
            addrSreet.isError ||
            addrHouse.isError ||
            userName.isError
          }
          onClick={(e) => handleRegister(e, userData)}
        >
          {"Зарегестрироваться"}
        </button>
      </div>
    </form>
  );
};
