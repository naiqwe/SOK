import { Box } from "@mui/material";
import { BookForm } from "../bookInputs/BookInputs";
import { CategoryForm } from "../categoryInputs/CategoryInputs";
import { useInput } from "../../../hooks/useInput";
import style from "./offerForm.module.css";

interface IBookData {
  authorLastName: string;
  authorFirstName: string;
  bookName: string;
  isbn?: string;
  bookYear: string;
}

export const OfferForm = () => {
  const authorLastName = useInput("", { minLength: 8, inputType: "text" });
  const authorFirstName = useInput("", { minLength: 8, inputType: "text" });
  const bookName = useInput("", { minLength: 8, inputType: "text" });
  const isbn = useInput("", { minLength: 8, inputType: "text" });
  const bookYear = useInput("", { minLength: 4, inputType: "text" });

  return (
    <form className={style.form}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* 1 */}
        <BookForm
          authorLastName={authorLastName}
          authorFirstName={authorFirstName}
          bookName={bookName}
          isbn={isbn}
          bookYear={bookYear}
        ></BookForm>
        {/* 2 */}
        <CategoryForm></CategoryForm>
      </Box>

      <button className={style.button}>{"Далее"}</button>
    </form>
  );
};
