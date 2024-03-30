export interface ICatigories {
  idCategory: number;
  multiSelect: boolean;
  name: string;
  checked?: boolean;
  open?: boolean;
  subCategory: Array<ICatigories>;
}
