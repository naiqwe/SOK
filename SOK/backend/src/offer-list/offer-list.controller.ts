import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { OfferListService } from "./offer-list.service";
import { CreateOfferListDto } from "./dto/create-offerlist.dto";

@Controller("offer-list")
export class OfferListController {
  constructor(private usersOfferListService: OfferListService) {}

  @Post()
  create(@Body() dto: CreateOfferListDto) {
    return this.usersOfferListService.createOfferList(dto);
  }
  //задача 2 получение оффер листов ППК
  @Get(":userId")
  getAll(@Param("userId") userId: number) {
    return this.usersOfferListService.getUserOfferLists(userId);
  }
}
