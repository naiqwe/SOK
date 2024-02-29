import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserAddressService } from "./user-address.service";
import { CreateUserAddressDto } from "./dto/create-useraddress.dto";

@Controller("users-addres")
export class UsersAddressController {
  constructor(private usersAddresService: UserAddressService) {}

  @Post()
  create(@Body() adressDto: CreateUserAddressDto) {
    return this.usersAddresService.createAddress(adressDto);
  }

  @Get()
  getAll() {
    return this.usersAddresService.getAllAddress();
  }
}
