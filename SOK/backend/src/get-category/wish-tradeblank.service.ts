// import { Injectable } from "@nestjs/common";
// import { UserValueCategoryService } from "src/user-value-category/user-value-category.service";
// import { WishListService } from "src/wish-list/wish-list.service";
// import { UserListService } from "src/user-list/user-list.service";
// import { CreateWishTradeBlankDto } from "./dto/create-getcategory.dto";

// @Injectable()
// export class WishTradeBlankService {
//   constructor(
//     private userValueCategoryService: UserValueCategoryService,
//     private wishListService: WishListService,
//     private userListService: UserListService
//   ) {}

//   async createWishTradeBlank(dto: CreateWishTradeBlankDto) {
//     const wishList = await this.wishListService.createWishList({
//       idUser: dto.idUser,
//       idStatus: dto.idStatus,
//     });

//     const userList = await this.userListService.createUserList({
//       idList: wishList.idWishList,
//       typeList: 2,
//     });

//     dto.idCategories.map(async (item) => {
//       const userValueCategory =
//         await this.userValueCategoryService.createUserValueCategory({
//           idUserList: userList.idUserList,
//           idCategory: item,
//         });
//     });
//     return wishList;
//   }
// }
