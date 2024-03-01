import { Module } from "@nestjs/common";
import { UserExchangeListService } from "./user-exchange-list.service";
import { UserExchangeListController } from "./user-exchange-list.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserExchangeList } from "./user-exchange-list.model";
import { ExchangeList } from "src/exchange-list/exchange-list.model";
import { Offer } from "src/offer-list/offer-list.model";

@Module({
  providers: [UserExchangeListService],
  controllers: [UserExchangeListController],
  imports: [
    SequelizeModule.forFeature([UserExchangeList, ExchangeList, Offer]),
  ],
})
export class UserExchangeListModule {}
