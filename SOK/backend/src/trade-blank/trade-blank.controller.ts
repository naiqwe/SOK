import { Body, Controller, Get, Post } from "@nestjs/common";
import { TradeBlankService } from "./trade-blank.service";
import { CreateBlankTradeDto } from "./dto/create-blanktrade.dto";

@Controller("trade-blank")
export class TradeBlankController {
  constructor(private tradeBlank: TradeBlankService) {}

  @Post()
  create(@Body() dto: CreateBlankTradeDto) {
    return this.tradeBlank.createTradeBlank(dto);
  }

  // @Get()
  // getAll() {
  //   return this.tradeBlank.getAllUserList();
  // }
}
