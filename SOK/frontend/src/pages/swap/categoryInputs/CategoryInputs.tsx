import { useState } from "react";
import style from "./categoryForm.module.css";
import { Box, Checkbox } from "@mui/material";
const categories = [
  {
    name: "Жанры",
    value: [
      "детектив",
      "детские книги",
      "история",
      "мемуары",
      "приключения",
      "психология",
      "фантастика",
      "эзотерика",
    ],
  },
  {
    name: "Область науки",
    value: [
      "Технические литература",
      "Автоматика",
      "Радиоэлектроника",
      "Энергетика",
      "Физика",
      "Химия",
      "Биология",
      "Информатика",
    ],
  },
  { name: "Обложка", value: ["Мягкий переплет", "Твердый переплет"] },
  { name: "Лаурят", value: ["Был лаурятом"] },
  { name: "Киноадаптация", value: ["Есть", "Нет"] },
  { name: "Язык", value: ["Русский", "Английский", "Французский "] },
];

export const CategoryForm = () => {
  const [checkedState, setCheckedState] = useState({
    isGenre: false,
    isScience: false,
    isBookCover: false,
    isLauret: false,
    isFilm: false,
    isLanguage: false,
  });

  return (
    <div className={style.formsContainer}>
      <h3 className={style.formTitle}>Категории *</h3>

      <Box
        className={style.scrollableDiv}
        sx={{ display: "flex", flexDirection: "column", ml: "10px" }}
      >
        <label>
          <Checkbox
            checked={checkedState.isGenre}
            onChange={() =>
              setCheckedState((prev) => {
                return { ...prev, isGenre: !prev.isGenre };
              })
            }
          />
          Жанры
        </label>

        {checkedState.isGenre && (
          <Box sx={{ display: "flex", flexDirection: "column", ml: "10px" }}>
            {categories[0].value.map((item) => {
              return (
                <label key={item}>
                  <Checkbox />
                  {item}
                </label>
              );
            })}
          </Box>
        )}

        <label>
          <Checkbox
            checked={checkedState.isScience}
            onChange={() =>
              setCheckedState((prev) => {
                return { ...prev, isScience: !prev.isScience };
              })
            }
          />
          Область науки
        </label>

        {checkedState.isScience && (
          <Box sx={{ display: "flex", flexDirection: "column", ml: "10px" }}>
            {categories[1].value.map((item) => {
              return (
                <label key={item}>
                  <Checkbox />
                  {item}
                </label>
              );
            })}
          </Box>
        )}

        <label>
          <Checkbox
            checked={checkedState.isBookCover}
            onChange={() =>
              setCheckedState((prev) => {
                return { ...prev, isBookCover: !prev.isBookCover };
              })
            }
          />
          Обложка
        </label>

        {checkedState.isBookCover && (
          <Box sx={{ display: "flex", flexDirection: "column", ml: "10px" }}>
            {categories[2].value.map((item) => {
              return (
                <label key={item}>
                  <Checkbox />
                  {item}
                </label>
              );
            })}
          </Box>
        )}

        <label>
          <Checkbox
            checked={checkedState.isLauret}
            onChange={() =>
              setCheckedState((prev) => {
                return { ...prev, isLauret: !prev.isLauret };
              })
            }
          />
          Лаурят
        </label>

        {checkedState.isLauret && (
          <Box sx={{ display: "flex", flexDirection: "column", ml: "10px" }}>
            {categories[3].value.map((item) => {
              return (
                <label key={item}>
                  <Checkbox />
                  {item}
                </label>
              );
            })}
          </Box>
        )}

        <label>
          <Checkbox
            checked={checkedState.isFilm}
            onChange={() =>
              setCheckedState((prev) => {
                return { ...prev, isFilm: !prev.isFilm };
              })
            }
          />
          Киноадаптация
        </label>

        {checkedState.isFilm && (
          <Box sx={{ display: "flex", flexDirection: "column", ml: "10px" }}>
            {categories[4].value.map((item) => {
              return (
                <label key={item}>
                  <Checkbox />
                  {item}
                </label>
              );
            })}
          </Box>
        )}

        <label>
          <Checkbox
            checked={checkedState.isLanguage}
            onChange={() =>
              setCheckedState((prev) => {
                return { ...prev, isLanguage: !prev.isLanguage };
              })
            }
          />
          Язык
        </label>

        {checkedState.isLanguage && (
          <Box sx={{ display: "flex", flexDirection: "column", ml: "10px" }}>
            {categories[5].value.map((item) => {
              return (
                <label key={item}>
                  <Checkbox />
                  {item}
                </label>
              );
            })}
          </Box>
        )}
      </Box>
    </div>
  );
};
