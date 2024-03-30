import { TextField } from "@mui/material";
import React from "react";
import style from "./fullNameInputs.module.css";

interface FullNameInputsProps {
  firstName: any;
  secondName: any;
  lastName: any;
}

export const FullNameInputs: React.FC<FullNameInputsProps> = ({
  firstName,
  lastName,
  secondName,
}) => {
  return (
    <div className={style.formsContainer}>
      <div className={style.inputSection}>
        <h3 className={style.inputSectionTitle}>Фамилия *</h3>
        <div className={style.inputsWrapper}>
          <TextField
            label="Фамилия"
            name="adrLastName"
            type="text"
            placeholder="Фамилия"
            sx={{ flexGrow: "1", mr: "10px" }}
            id="adrLastName"
            error={lastName.isDirty && lastName.isError}
            helperText={
              lastName.isDirty && lastName.isError && lastName.errorMessage
            }
            value={lastName.value}
            onChange={(e) => lastName.onChange(e)}
            onBlur={lastName.onBlur}
          ></TextField>
        </div>
      </div>

      <div className={style.inputSection}>
        <h3 className={style.inputSectionTitle}>Имя *</h3>
        <div className={style.inputsWrapper}>
          <TextField
            label="Имя"
            name="adrFirstName"
            type="text"
            placeholder="Имя"
            sx={{ flexGrow: "1", mr: "10px" }}
            id="adrFirstName"
            error={firstName.isDirty && firstName.isError}
            helperText={
              firstName.isDirty && firstName.isError && firstName.errorMessage
            }
            value={firstName.value}
            onChange={(e) => firstName.onChange(e)}
            onBlur={firstName.onBlur}
          ></TextField>
        </div>
      </div>

      <div className={style.inputSection}>
        <h3 className={style.inputSectionTitle}>{"Отчесвто (при наличии)"}</h3>
        <div className={style.inputsWrapper}>
          <TextField
            label="Отчество"
            name="adrSecondName"
            type="text"
            placeholder="Имя"
            sx={{ flexGrow: "1", mr: "10px" }}
            id="adrSecondName"
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
      </div>
    </div>
  );
};
