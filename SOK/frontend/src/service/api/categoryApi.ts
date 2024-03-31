import { $host } from ".";
import { ICatigories } from "../../model/ICategories";

// interface ICatigories {
//   idCategory: number;
//   multiSelect: boolean;
//   name: string;
//   subCategory: Array<ICatigories>;
// }

function compare(a: ICatigories, b: ICatigories) {
  if (a.idCategory < b.idCategory) {
    return -1;
  }
  if (a.idCategory > b.idCategory) {
    return 1;
  }
  return 0;
}

export const fetchCategories = async () => {
  const { data } = await $host.get("category");
  const categories: ICatigories[] = data;
  categories.sort(compare);
  return categories;
};
