import { Module } from "@nestjs/common";
import { BookLiteraryService } from "./book-literary.service";
import { BookLiteraryController } from "./book-literary.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { BookLiterary } from "./book-literary.model";
import { Autor } from "src/autor/autor.model";

@Module({
  providers: [BookLiteraryService],
  controllers: [BookLiteraryController],
  imports: [SequelizeModule.forFeature([BookLiterary, Autor])],
})
export class BookLiteraryModule {}
