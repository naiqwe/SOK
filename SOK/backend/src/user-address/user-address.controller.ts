import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserAddressService } from "./user-address.service";

@Controller("user-address")
export class UserAddressController {
  //Нужна помощь максима
  constructor(private usersAddressService: UserAddressService) {}

  //   @Post()
  //   create(@Body() userDto: UserAddressService) {

  //     return this.usersAddressService.createUser(userDto);
  //   }

  //   @Get()
  //   getAll() {
  //     return this.usersAddressService.getAllUsers();
  //   }
}
