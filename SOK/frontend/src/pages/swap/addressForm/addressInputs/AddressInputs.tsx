import React from "react";
import style from "./addressInputs.module.css";
import { TextField } from "@mui/material";

interface AddressInputsProps {
  city: any;
  street: any;
  structure: any;
  house: any;
  apartment: any;
  index: any;
}

export const AddressInputs: React.FC<AddressInputsProps> = ({
  city,
  street,
  structure,
  house,
  apartment,
  index,
}) => {
  return (
    <div className={style.formsContainer}>
      <div className={style.inputSection}>
        <h3 className={style.inputSectionTitle}>Город *</h3>
        <div className={style.inputsWrapper}>
          <TextField
            label="Город"
            name="city"
            type="text"
            placeholder="Город"
            sx={{ flexGrow: "1", mr: "10px" }}
            id="city"
            error={city.isDirty && city.isError}
            helperText={city.isDirty && city.isError && city.errorMessage}
            value={city.value}
            onChange={(e) => city.onChange(e)}
            onBlur={city.onBlur}
          ></TextField>
        </div>
      </div>

      <div className={style.inputSection}>
        <h3 className={style.inputSectionTitle}>Улица *</h3>
        <div className={style.inputsWrapper}>
          <TextField
            label="Улица"
            name="street"
            type="text"
            placeholder="Улица"
            sx={{ flexGrow: "1", mr: "10px" }}
            id="street"
            error={street.isDirty && street.isError}
            helperText={street.isDirty && street.isError && street.errorMessage}
            value={street.value}
            onChange={(e) => street.onChange(e)}
            onBlur={street.onBlur}
          ></TextField>
        </div>
      </div>
      {/* ///// */}

      <div className={style.inputSection}>
        <div className={style.multiInputSection}>
          <div className={style.multiInputWrapper}>
            <h3 className={style.inputSectionTitle}>Строение *</h3>
            <TextField
              label="Строение"
              name="structure"
              type="number"
              placeholder="номер"
              id="structure"
              error={structure.isDirty && structure.isError}
              helperText={
                structure.isDirty && structure.isError && structure.errorMessage
              }
              value={structure.value}
              onChange={(e) => structure.onChange(e)}
              onBlur={structure.onBlur}
            ></TextField>
          </div>

          <div className={style.multiInputWrapper}>
            <h3 className={style.inputSectionTitle}>Дом *</h3>
            <TextField
              label="Дом"
              name="house"
              type="number"
              placeholder="дом"
              id="house"
              error={house.isDirty && house.isError}
              helperText={house.isDirty && house.isError && house.errorMessage}
              value={house.value}
              onChange={(e) => house.onChange(e)}
              onBlur={house.onBlur}
            ></TextField>
          </div>

          <div className={style.multiInputWrapper}>
            <h3 className={style.inputSectionTitle}>Квартира</h3>
            <TextField
              label="Квартира"
              name="apartment"
              type="number"
              placeholder="Квартира"
              id="apartment"
              error={apartment.isDirty && apartment.isError}
              helperText={
                apartment.isDirty && apartment.isError && apartment.errorMessage
              }
              value={apartment.value}
              onChange={(e) => apartment.onChange(e)}
              onBlur={apartment.onBlur}
            ></TextField>
          </div>
        </div>
      </div>

      <div className={style.inputSection}>
        <h3 className={style.inputSectionTitle}>Индекс *</h3>
        <div className={style.inputsWrapper}>
          <TextField
            label="Индекс"
            name="index"
            type="text"
            placeholder="Индекс"
            sx={{ width: "50%", mr: "10px" }}
            id="index"
            error={index.isDirty && index.isError}
            helperText={index.isDirty && index.isError && index.errorMessage}
            value={index.value}
            onChange={(e) => index.onChange(e)}
            onBlur={index.onBlur}
          ></TextField>
        </div>
      </div>
    </div>
  );
};
