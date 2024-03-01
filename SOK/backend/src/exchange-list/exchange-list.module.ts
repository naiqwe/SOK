import { Module } from "@nestjs/common";
import { ExchangeListService } from "./exchange-list.service";
import { ExchangeListController } from "./exchange-list.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { ExchangeList } from "./exchange-list.model";
import { Offer } from "src/offer-list/offer-list.model";
import { WishList } from "src/wish-list/wish-list.model";
import { UserExchangeList } from "src/user-exchange-list/user-exchange-list.model";

@Module({
  providers: [ExchangeListService],
  controllers: [ExchangeListController],
  imports: [
    SequelizeModule.forFeature([
      ExchangeList,
      Offer,
      WishList,
      UserExchangeList,
    ]),
  ],
})
export class ExchangeListModule {}
