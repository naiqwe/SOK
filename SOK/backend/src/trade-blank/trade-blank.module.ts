import { Module } from "@nestjs/common";
import { TradeBlankController } from "./trade-blank.controller";
import { TradeBlankService } from "./trade-blank.service";
import { AutorModule } from "src/autor/autor.module";
import { OfferListModule } from "src/offer-list/offer-list.module";
import { BookLiteraryModule } from "src/book-literary/book-literary.module";
import { UserValueCategoryModule } from "src/user-value-category/user-value-category.module";
import { UserListModule } from "src/user-list/user-list.module";

@Module({
  controllers: [TradeBlankController],
  providers: [TradeBlankService],
  imports: [
    AutorModule,
    OfferListModule,
    BookLiteraryModule,
    UserValueCategoryModule,
    UserListModule,
  ],
})
export class TradeBlankModule {}
