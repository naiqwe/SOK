import React, { useEffect, useState } from "react";
import { CategoryForm } from "../categoryInputs/CategoryInputs";
import { Box } from "@mui/material";
import style from "./wishForm.module.css";
import { ICatigories } from "../../../model/ICategories";
import { fetchCategories } from "../../../service/api/categoryApi";

interface IWishFormProps {
  nextStep: Function;
}

export const WishForm: React.FC<IWishFormProps> = () => {
  const [categories, setCategories] = useState<ICatigories[]>([]);
  const [categoriesId, setCategoriesId] = useState<number[]>([]);

  // function handleOfferForm(e: any) {
  //   e.preventDefault();
  //   console.log("post2");
  //   const offerData: IOfferList = {
  //     lastName: authorLastName.value,
  //     firstName: authorFirstName.value,
  //     bookName: bookName.value,
  //     idUser: user.id,
  //     ibsn: isbn.value,
  //     yearPublishing: bookYear.value,
  //     idStatus: 1,
  //     idCategories: categoriesId,
  //   };

  //   localStorage.offerdata = JSON.stringify(offerData);
  //   nextStep(e, 1);
  //   // postOfferList(offerData)
  //   //   .then((res) => nextStep(e, 1))
  //   //   .catch((err) => console.log(err));
  // }

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
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <button className={style.button}>{"Назад"}</button>

      <form className={style.form}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: "50%" }}>
            <CategoryForm
              categories={categories}
              openCategory={openCategoryCheckbox}
              checkSubCategory={checkSubCategory}
            ></CategoryForm>
          </Box>
        </Box>

        <button className={style.button}>{"Далее"}</button>
      </form>
    </Box>
  );
};
