import { $host } from ".";
import { IOfferList } from "../../model/IOfferList";

export const postOfferList = async (offerListData: IOfferList) => {
  const { data } = await $host.post("/tradeblank", { ...offerListData });
  return data;
};
