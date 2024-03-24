import { Injectable } from "@nestjs/common";
import { UserValueCategoryService } from "src/user-value-category/user-value-category.service";
import { WishListService } from "src/wish-list/wish-list.service";
import { UserListService } from "src/user-list/user-list.service";
import { CreateWishTradeBlankDto } from "./dto/create-wishtradeblank.dto";
import { UserAddressService } from "src/user-address/user-address.service";

@Injectable()
export class WishTradeBlankService {
  constructor(
    private userValueCategoryService: UserValueCategoryService,
    private wishListService: WishListService,
    private userListService: UserListService,
    private userAddressService: UserAddressService
  ) {}

  async createWishTradeBlank(dto: CreateWishTradeBlankDto) {
    const userAddress = await this.userAddressService.getAddressByUserId(
      dto.idUser
    );
    const wishList = await this.wishListService.createWishList({
      idUser: dto.idUser,
      idStatus: 1,
      idUserAddress: userAddress.idUserAddress,
    });

    const userList = await this.userListService.createUserList({
      idList: wishList.idWishList,
      typeList: 2,
    });

    dto.idCategories.map(async (item) => {
      const userValueCategory =
        await this.userValueCategoryService.createUserValueCategory({
          idUserList: userList.idUserList,
          idCategory: item,
        });
    });
    return wishList;
  }
}
