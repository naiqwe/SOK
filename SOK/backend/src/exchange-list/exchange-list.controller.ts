import { Body, Controller, Get, Post } from "@nestjs/common";
import { ExchangeListService } from "./exchange-list.service";
import { CreateExchangeListDto } from "./dto/create-exchangelist.dto";

@Controller("exchange-list")
export class ExchangeListController {
  constructor(private exchangeListService: ExchangeListService) {}

  @Post()
  create(@Body() dto: CreateExchangeListDto) {
    return this.exchangeListService.createExchangeList(dto);
  }

  @Get()
  getAll() {
    return this.exchangeListService.getAllExchangeList();
  }
}
