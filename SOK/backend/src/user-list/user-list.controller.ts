import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserListService } from "./user-list.service";
import { CreateUserListDto } from "./dto/create-userlist.dto";

@Controller("user-list")
export class UserListController {
  constructor(private userListService: UserListService) {}

  @Post()
  create(@Body() dto: CreateUserListDto) {
    return this.userListService.createUserList(dto);
  }

  @Get()
  getAll() {
    return this.userListService.getAllUserList();
  }
}
