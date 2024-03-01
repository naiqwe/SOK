import { Body, Controller, Get, Post } from "@nestjs/common";
import { OfferListService } from "./offer-list.service";
import { CreateOfferListDto } from "./dto/create-offerlist.dto";

@Controller("offer-list")
export class OfferListController {
  constructor(private usersOfferListService: OfferListService) {}

  @Post()
  create(@Body() dto: CreateOfferListDto) {
    return this.usersOfferListService.createOfferList(dto);
  }

  @Get()
  getAll() {
    return this.usersOfferListService.getAllOfferList();
  }
}
