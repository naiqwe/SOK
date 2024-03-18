import React from "react";
import style from "./addressForm.module.css";
import { Box } from "@mui/material";
import { useInput } from "../../../hooks/useInput";
import { AddressInputs } from "../addressInputs/AddressInputs";

export const AddressForm = () => {
  const city = useInput(
    "",
    { minLength: 3, inputType: "text" },
    {
      key: "addrCity",
    }
  );
  const street = useInput(
    "",
    { minLength: 3, inputType: "text" },
    {
      key: "addrSreet",
    }
  );
  const structure = useInput(
    "",
    { minLength: 1, inputType: "text" },
    {
      key: "addrStructure",
    }
  );
  const house = useInput(
    "",
    { minLength: 1, inputType: "text" },
    {
      key: "addrHouse",
    }
  );
  const apartment = useInput(
    "",
    { minLength: 1, inputType: "text" },
    {
      key: "addrApart",
    }
  );
  const index = useInput(
    "",
    { minLength: 5, inputType: "text" },
    {
      key: "addrIndex",
    }
  );
  const firstName = useInput("", { minLength: 8, inputType: "text" });
  const lastName = useInput("", { minLength: 8, inputType: "text" });
  const secondName = useInput("", { minLength: 8, inputType: "text" });

  return (
    <form className={style.form}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <AddressInputs
          city={city}
          street={street}
          structure={structure}
          house={house}
          apartment={apartment}
          index={index}
        ></AddressInputs>

        {/* 2 */}
        <div className={style.formsContainer}>2</div>
      </Box>

      <button className={style.button}>{"Далее"}</button>
    </form>
  );
};
