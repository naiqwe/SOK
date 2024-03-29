import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserListService } from "./user-list.service";
import { CreateUserListDto } from "./dto/create-userlist.dto";

@Controller("user-list")
export class UserListController {
  constructor(private userListService: UserListService) {}

  @Post()
  create(@Body() dto: CreateUserListDto) {
    return this.userListService.createUserList(dto);
  }

  // @Get()
  // getAll() {
  //   return this.userListService.getAllUserList();
  // }

  //offer listi
  // @Get()
  // getAllOffreList() {
  //   return this.userListService.getOfferUserList(6);
  // }

  @Get("/wish")
  getAllWishList() {
    return this.userListService.getWishUserList(6); // изменить параметр
  }

  @Get("/wish-self")
  getSelfWishList() {
    return this.userListService.getUsersWishLists(6); // изменить параметр
  }

  //получение Wish обменов(предложений по Wish Листу)
  @Get("/:userId")
  getWishOffers(@Param("userId") userId: number) {
    return this.userListService.getWishOffers(userId); // изменить параметр
  }
}
