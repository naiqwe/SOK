import { Fragment, useEffect, useState } from "react";
import style from "./categoryForm.module.css";
import { Box, Checkbox } from "@mui/material";
import { fetchCategories } from "../../../service/api/categoryApi";
import { ICatigories } from "../../../model/ICategories";

interface CategoryFormProps {
  categories: ICatigories[];
  openCategory: Function;
  checkSubCategory: Function;
}

export const CategoryForm: React.FC<CategoryFormProps> = ({
  categories,
  openCategory,
  checkSubCategory,
}) => {
  // const [categories, setCategories] = useState<ICatigories[]>([]);
  // const [categoriesId, setCategoriesId] = useState<number[]>([]);

  // console.log(categoriesId);

  // useEffect(() => {
  //   fetchCategories()
  //     .then((categories) => {
  //       console.log(categories);
  //       return categories.map((item) => {
  //         item.open = false;
  //         item.subCategory = item.subCategory.map((sub) => {
  //           sub.checked = false;
  //           return sub;
  //         });
  //         return item;
  //       });
  //     })
  //     .then((res) => setCategories(res));
  // }, []);

  // function openCategoryCheckbox(categoryId: number) {
  //   setCategories((prev) => {
  //     return prev.map((item) => {
  //       if (item.idCategory === categoryId) {
  //         item.open = !item.open;
  //       }
  //       return item;
  //     });
  //   });
  // }

  // function checkSubCategory(categoryId: number, subCategoryId: number) {
  //   setCategories((prev) => {
  //     return prev.map((item) => {
  //       if (item.idCategory == categoryId) {
  //         item.subCategory.map((sub) => {
  //           if (sub.idCategory === subCategoryId) {
  //             sub.checked = !sub.checked;
  //             if (sub.checked) {
  //               setCategoriesId((prev) => [...prev, sub.idCategory]);
  //             } else {
  //               setCategoriesId(
  //                 categoriesId.filter((id) => id != sub.idCategory)
  //               );
  //             }
  //           }
  //           return sub;
  //         });
  //       }
  //       return item;
  //     });
  //   });
  // }

  return (
    <div className={style.formsContainer}>
      <h3 className={style.formTitle}>Категории</h3>
      <Box
        className={style.scrollableDiv}
        sx={{ display: "flex", flexDirection: "column", ml: "10px" }}
      >
        {categories.map((category) => {
          return (
            <Fragment key={category.idCategory}>
              <label>
                <Checkbox
                  checked={category.open}
                  onChange={() => openCategory(category.idCategory)}
                />
                {category.name}
              </label>

              {category.open && (
                <Box
                  sx={{ display: "flex", flexDirection: "column", ml: "10px" }}
                >
                  {category.subCategory.map((subItem: ICatigories) => {
                    return (
                      <label key={subItem.name}>
                        <Checkbox
                          checked={subItem.checked}
                          onChange={() =>
                            checkSubCategory(
                              category.idCategory,
                              subItem.idCategory
                            )
                          }
                        />

                        {subItem.name}
                      </label>
                    );
                  })}
                </Box>
              )}
            </Fragment>
          );
        })}
      </Box>
    </div>
  );
};
