import { Module, forwardRef } from "@nestjs/common";
import { UserListService } from "./user-list.service";
import { UserListController } from "./user-list.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserList } from "./user-list.model";
import { Offer } from "src/offer-list/offer-list.model";
import { WishList } from "src/wish-list/wish-list.model";
import { OfferListModule } from "src/offer-list/offer-list.module";

@Module({
  providers: [UserListService],
  controllers: [UserListController],
  imports: [
    SequelizeModule.forFeature([UserList, Offer, WishList]),
    forwardRef(() => OfferListModule),
  ],
  exports: [UserListService],
})
export class UserListModule {}
