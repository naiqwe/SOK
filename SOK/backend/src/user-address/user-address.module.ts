import { Module } from "@nestjs/common";
import { UserAddressService } from "./user-address.service";
import { UserAddressController } from "./user-address.controller";
import { User } from "src/users/users.model";

@Module({
  providers: [UserAddressService],
  controllers: [UserAddressController],
  imports: [User],
})
export class UserAddressModule {}
