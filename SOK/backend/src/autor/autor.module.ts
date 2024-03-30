import { Module } from "@nestjs/common";
import { AutorController } from "./autor.controller";
import { AutorService } from "./autor.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Autor } from "./autor.model";
import { BookLiterary } from "src/book-literary/book-literary.model";

@Module({
  controllers: [AutorController],
  providers: [AutorService],
  imports: [SequelizeModule.forFeature([Autor, BookLiterary])],
  exports: [AutorService],
})
export class AutorModule {}
