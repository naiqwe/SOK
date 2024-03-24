import { Injectable } from "@nestjs/common";
import { UserValueCategoryService } from "src/user-value-category/user-value-category.service";
import { WishListService } from "src/wish-list/wish-list.service";
import { UserListService } from "src/user-list/user-list.service";
import { CreateWishTradeBlankDto } from "./dto/create-wishtradeblank.dto";
import { UserAddressService } from "src/user-address/user-address.service";
import { UsersService } from "src/users/users.service";

@Injectable()
export class WishTradeBlankService {
  constructor(
    private userValueCategoryService: UserValueCategoryService,
    private wishListService: WishListService,
    private userListService: UserListService,
    private userAddressService: UserAddressService,
    private usersService: UsersService
  ) {}

  async createWishTradeBlank(dto: CreateWishTradeBlankDto) {
    const userAddress = await this.userAddressService.getAddressByDto({
      idUser: dto.idUser,
      addrIndex: dto.addrIndex,
      addrCity: dto.addrCity,
      addrSreet: dto.addrSreet,
      addrHouse: dto.addrHouse,
      addrStructure: dto.addrStructure,
      addrApart: dto.addrApart,
    });
    console.log({
      idUser: dto.idUser,
      firstName: dto.firstName,
      lastName: dto.lastName,
      secondName: dto.secondName,
    });
    const updateUser = await this.usersService.updateUserNames({
      idUser: dto.idUser,
      firstName: dto.firstName,
      lastName: dto.lastName,
      secondName: dto.secondName,
    });

    if (userAddress) {
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
    } else {
      const newUserAddres = await this.userAddressService.createAddress({
        idUser: dto.idUser,
        addrIndex: dto.addrIndex,
        addrCity: dto.addrCity,
        addrSreet: dto.addrSreet,
        addrHouse: dto.addrHouse,
        addrStructure: dto.addrStructure,
        addrApart: dto.addrApart,
      });
      const wishList = await this.wishListService.createWishList({
        idUser: dto.idUser,
        idStatus: 1,
        idUserAddress: newUserAddres.idUserAddress,
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

    // const wishList = await this.wishListService.createWishList({
    //   idUser: dto.idUser,
    //   idStatus: 1,
    //   idUserAddress: userAddress.idUserAddress,
    // });

    // const userList = await this.userListService.createUserList({
    //   idList: wishList.idWishList,
    //   typeList: 2,
    // });

    // dto.idCategories.map(async (item) => {
    //   const userValueCategory =
    //     await this.userValueCategoryService.createUserValueCategory({
    //       idUserList: userList.idUserList,
    //       idCategory: item,
    //     });
    // });
    // return wishList;
  }
}
