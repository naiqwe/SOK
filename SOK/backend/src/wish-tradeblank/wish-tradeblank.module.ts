import { Module } from "@nestjs/common";
import { WishTradeBlankService } from "./wish-tradeblank.service";
import { WishTradeBlankController } from "./wish-tradeblank.controller";
import { UserValueCategoryModule } from "src/user-value-category/user-value-category.module";
import { WishListModule } from "src/wish-list/wish-list.module";
import { UserListModule } from "src/user-list/user-list.module";
import { UserAddressModule } from "src/user-address/user-address.module";
import { UsersModule } from "src/users/users.module";

@Module({
  providers: [WishTradeBlankService],
  controllers: [WishTradeBlankController],
  imports: [
    UserValueCategoryModule,
    WishListModule,
    UserListModule,
    UserAddressModule,
    UsersModule,
  ],
})
export class WishTradeBlankModule {}
