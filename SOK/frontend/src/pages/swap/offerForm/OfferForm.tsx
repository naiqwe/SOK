import { Box } from "@mui/material";
import { BookForm } from "./bookInputs/BookInputs";
import { CategoryForm } from "../categoryInputs/CategoryInputs";
import { useInput } from "../../../hooks/useInput";
import style from "./offerForm.module.css";
import { useEffect, useState } from "react";
import { fetchCategories } from "../../../service/api/categoryApi";
import { ICatigories } from "../../../model/ICategories";
import { postOfferList } from "../../../service/api/offerListApi";
import { IOfferList } from "../../../model/IOfferList";
import { useAppSelector } from "../../../hooks/redux";

interface IOfferFormProps {
  nextStep: Function;
}

export const OfferForm: React.FC<IOfferFormProps> = ({ nextStep }) => {
  const user = useAppSelector((state) => state.user.user);

  const authorLastName = useInput(
    "",
    { minLength: 2, inputType: "text" },
    { key: "authorLastName" }
  );
  const authorFirstName = useInput(
    "",
    { minLength: 2, inputType: "text" },
    { key: "authorFirstName" }
  );
  const bookName = useInput(
    "",
    { minLength: 2, inputType: "text" },
    { key: "bookName" }
  );
  const isbn = useInput(
    "",
    { minLength: 4, inputType: "text" },
    { key: "isbn" }
  );
  const bookYear = useInput(
    "",
    { minLength: 4, inputType: "text" },
    { key: "bookYear" }
  );

  const [categories, setCategories] = useState<ICatigories[]>([]);
  const [categoriesId, setCategoriesId] = useState<number[]>([]);

  //Категории
  useEffect(() => {
    fetchCategories()
      .then((categories) => {
        console.log(categories);
        return categories.map((item) => {
          item.open = false;
          item.subCategory = item.subCategory.map((sub) => {
            sub.checked = false;
            return sub;
          });
          return item;
        });
      })
      .then((res) => setCategories(res));
  }, []);

  function openCategoryCheckbox(categoryId: number) {
    setCategories((prev) => {
      return prev.map((item) => {
        if (item.idCategory === categoryId) {
          item.open = !item.open;
        }
        return item;
      });
    });
  }

  function checkSubCategory(categoryId: number, subCategoryId: number) {
    setCategories((prev) => {
      return prev.map((item) => {
        if (item.idCategory == categoryId) {
          item.subCategory.map((sub) => {
            if (sub.idCategory === subCategoryId) {
              sub.checked = !sub.checked;
              if (sub.checked) {
                setCategoriesId((prev) => [...prev, sub.idCategory]);
              } else {
                setCategoriesId(
                  categoriesId.filter((id) => id != sub.idCategory)
                );
              }
            }
            return sub;
          });
        }
        return item;
      });
    });
  }

  function handleOfferForm(e: any) {
    e.preventDefault();
    console.log("post");
    const offerData: IOfferList = {
      lastName: authorLastName.value,
      firstName: authorFirstName.value,
      bookName: bookName.value,
      idUser: user.id,
      ibsn: isbn.value,
      yearPublishing: bookYear.value,
      idStatus: 1,
      idCategories: categoriesId,
    };

    localStorage.offerdata = JSON.stringify(offerData);
    nextStep(e, 1);
    // postOfferList(offerData)
    //   .then((res) => nextStep(e, 1))
    //   .catch((err) => console.log(err));
  }

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
        <CategoryForm
          categories={categories}
          openCategory={openCategoryCheckbox}
          checkSubCategory={checkSubCategory}
        ></CategoryForm>
      </Box>

      <button
        disabled={
          authorLastName.isError ||
          authorFirstName.isError ||
          bookName.isError ||
          isbn.isError ||
          bookYear.isError ||
          !(categoriesId.length > 0)
        }
        onClick={(e) => handleOfferForm(e)}
        className={style.button}
      >
        {"Далее"}
      </button>
    </form>
  );
};
