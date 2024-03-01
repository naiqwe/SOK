import { Module } from "@nestjs/common";
import { WishListService } from "./wish-list.service";
import { WishListController } from "./wish-list.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { WishList } from "./wish-list.model";
import { User } from "src/users/users.model";
import { Status } from "src/status/status.model";
import { UserAddress } from "src/user-address/user-address.model";

@Module({
  providers: [WishListService],
  controllers: [WishListController],
  imports: [SequelizeModule.forFeature([WishList, User, Status, UserAddress])],
})
export class WishListModule {}
