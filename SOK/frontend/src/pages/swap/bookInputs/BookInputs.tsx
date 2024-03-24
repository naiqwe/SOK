import React from "react";
import style from "./bookForm.module.css";
import { TextField } from "@mui/material";

interface BookFormProps {
  authorLastName: any;
  authorFirstName: any;
  bookName: any;
  isbn: any;
  bookYear: any;
}

export const BookForm: React.FC<BookFormProps> = ({
  authorLastName,
  authorFirstName,
  bookName,
  isbn,
  bookYear,
}) => {
  return (
    <div className={style.formsContainer}>
      <div className={style.inputSection}>
        <h3 className={style.inputSectionTitle}>Автор *</h3>
        <div className={style.swapInputsWrapper}>
          <TextField
            label="Фамилия"
            name="authorLastName"
            type="text"
            placeholder="Фамилия"
            sx={{ flexGrow: "1", mr: "10px" }}
            id="firstName"
            error={authorLastName.isDirty && authorLastName.isError}
            helperText={
              authorLastName.isDirty &&
              authorLastName.isError &&
              authorLastName.errorMessage
            }
            value={authorLastName.value}
            onChange={(e) => authorLastName.onChange(e)}
            onBlur={authorLastName.onBlur}
          ></TextField>
          <TextField
            label="Имя"
            name="authorName"
            type="text"
            placeholder="Имя"
            sx={{ width: "45%" }}
            id="authorName"
            error={authorFirstName.isDirty && authorFirstName.isError}
            helperText={
              authorFirstName.isDirty &&
              authorFirstName.isError &&
              authorFirstName.errorMessage
            }
            value={authorFirstName.value}
            onChange={(e) => authorFirstName.onChange(e)}
            onBlur={authorFirstName.onBlur}
          ></TextField>
        </div>
      </div>

      <div className={style.inputSection}>
        <h3 className={style.inputSectionTitle}>Название книги *</h3>
        <div className={style.swapInputsWrapper}>
          <TextField
            label="Название книги"
            name="bookName"
            type="text"
            placeholder="Название книги"
            sx={{ flexGrow: "1" }}
            id="bookName"
            error={bookName.isDirty && bookName.isError}
            helperText={
              bookName.isDirty && bookName.isError && bookName.errorMessage
            }
            value={bookName.value}
            onChange={(e) => bookName.onChange(e)}
            onBlur={bookName.onBlur}
          ></TextField>
        </div>
      </div>

      <div className={style.inputSection}>
        <div className={style.swapInputsWrapper}>
          <div className={style.isbnInputWrapper}>
            <h3 className={style.inputSectionTitle}>ISBN</h3>
            <TextField
              label="ISBN"
              name="ISBN"
              type="number"
              placeholder="978-5-93673-265-2"
              id="isbn"
              error={isbn.isDirty && isbn.isError}
              helperText={isbn.isDirty && isbn.isError && isbn.errorMessage}
              value={isbn.value}
              onChange={(e) => isbn.onChange(e)}
              onBlur={isbn.onBlur}
            ></TextField>
          </div>
          <div className={style.yearInputWrapper}>
            <h3 className={style.inputSectionTitle}>Год издания *</h3>
            <TextField
              label="Год издания"
              name="bookYear"
              type="number"
              placeholder="2012"
              sx={{ width: "50%" }}
              id="bookYear"
              error={bookYear.isDirty && bookYear.isError}
              helperText={
                bookYear.isDirty && bookYear.isError && bookYear.errorMessage
              }
              value={bookYear.value}
              onChange={(e) => bookYear.onChange(e)}
              onBlur={bookYear.onBlur}
            ></TextField>
          </div>
        </div>
      </div>
    </div>
  );
};
