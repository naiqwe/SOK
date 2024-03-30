import { Module } from "@nestjs/common";
import { UserValueCategoryService } from "./user-value-category.service";
import { UserValueCategoryController } from "./user-value-category.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserValueCategory } from "./user-value-category.model";
import { UserList } from "src/user-list/user-list.model";
import { Category } from "src/category/category.model";

@Module({
  providers: [UserValueCategoryService],
  controllers: [UserValueCategoryController],
  imports: [
    SequelizeModule.forFeature([UserValueCategory, UserList, Category]),
  ],
  exports: [UserValueCategoryService],
})
export class UserValueCategoryModule {}
