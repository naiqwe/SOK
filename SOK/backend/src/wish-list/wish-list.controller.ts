import { Body, Controller, Get, Post } from "@nestjs/common";
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
}
