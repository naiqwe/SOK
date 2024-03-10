import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Category } from "./category.model";
import { UserValueCategory } from "src/user-value-category/user-value-category.model";

@Module({
  providers: [CategoryService],
  controllers: [CategoryController],
  imports: [SequelizeModule.forFeature([Category, UserValueCategory])],
})
export class CategoryModule {}
