import { Body, Controller, Post } from "@nestjs/common";
import { WishTradeBlankService } from "./wish-tradeblank.service";
import { CreateWishTradeBlankDto } from "./dto/create-wishtradeblank.dto";

@Controller("wishtradeblank")
export class WishTradeBlankController {
  constructor(private wishTradeBlank: WishTradeBlankService) {}

  @Post()
  create(@Body() dto: CreateWishTradeBlankDto) {
    return this.wishTradeBlank.createWishTradeBlank(dto);
  }
}
