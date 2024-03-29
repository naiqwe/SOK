import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { WishListService } from "./wish-list.service";
import { CreateWishListDto } from "./dto/create-wishlist.dto";

@Controller("wish-list")
export class WishListController {
  constructor(private usersWishListService: WishListService) {}

  @Post()
  create(@Body() adressDto: CreateWishListDto) {
    return this.usersWishListService.createWishList(adressDto);
  }

  @Get()
  getAll() {
    return this.usersWishListService.getAllWishList();
  }

  //задание 3 получение списка ЗПК
  @Get(":userId")
  getAllSelfWishListss(@Param("userId") userId: number) {
    return this.usersWishListService.getSelfWishLists(userId);
  }
}
