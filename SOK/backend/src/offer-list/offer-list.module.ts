import { Module, forwardRef } from "@nestjs/common";
import { OfferListService } from "./offer-list.service";
import { OfferListController } from "./offer-list.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Offer } from "./offer-list.model";
import { BookLiterary } from "src/book-literary/book-literary.model";
import { User } from "src/users/users.model";
import { Status } from "src/status/status.model";
import { UserListModule } from "src/user-list/user-list.module";

@Module({
  providers: [OfferListService],
  controllers: [OfferListController],
  imports: [
    SequelizeModule.forFeature([Offer, BookLiterary, User, Status]),
    forwardRef(() => UserListModule),
  ],
  exports: [OfferListService],
})
export class OfferListModule {}
