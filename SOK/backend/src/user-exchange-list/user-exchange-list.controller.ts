import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserExchangeListService } from "./user-exchange-list.service";
import { CreateUserExchangeListDto } from "./dto/create-userexchangelist.dto";

@Controller("user-exchange-list")
export class UserExchangeListController {
  constructor(private usersExchangeListService: UserExchangeListService) {}

  @Post()
  create(@Body() dto: CreateUserExchangeListDto) {
    return this.usersExchangeListService.createUserExchangeList(dto);
  }

  @Get()
  getAll() {
    return this.usersExchangeListService.getAllUserExchangeList();
  }
}
