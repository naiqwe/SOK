import { Module } from "@nestjs/common";
import { BookResponseService } from "./book-response.service";
import { BookResponseController } from "./book-response.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { BookResponse } from "./book-response.model";
import { BookLiterary } from "src/book-literary/book-literary.model";
import { User } from "src/users/users.model";

@Module({
  providers: [BookResponseService],
  controllers: [BookResponseController],
  imports: [SequelizeModule.forFeature([BookResponse, BookLiterary, User])],
})
export class BookResponseModule {}
