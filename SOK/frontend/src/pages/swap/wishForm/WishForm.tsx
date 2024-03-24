import React from "react";
import { CategoryForm } from "../categoryInputs/CategoryInputs";
import { Box } from "@mui/material";
import style from "./wishForm.module.css";

export const WishForm: React.FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <button className={style.button}>{"Назад"}</button>

      <form className={style.form}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "50%" }}>
            <CategoryForm></CategoryForm>
          </Box>
        </Box>

        <button className={style.button}>{"Далее"}</button>
      </form>
    </Box>
  );
};
