import { Module } from "@nestjs/common";
import { OfferListService } from "./offer-list.service";
import { OfferListController } from "./offer-list.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Offer } from "./offer-list.model";
import { BookLiterary } from "src/book-literary/book-literary.model";
import { User } from "src/users/users.model";
import { Status } from "src/status/status.model";

@Module({
  providers: [OfferListService],
  controllers: [OfferListController],
  imports: [SequelizeModule.forFeature([Offer, BookLiterary, User, Status])],
})
export class OfferListModule {}
