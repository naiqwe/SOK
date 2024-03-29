import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserValueCategoryService } from "./user-value-category.service";
import { CreateUserValueCategoryDto } from "./dto/create-uservaluecategory.dto";

@Controller("user-value-category")
export class UserValueCategoryController {
  constructor(private userValueCategory: UserValueCategoryService) {}

  @Post()
  create(@Body() dto: CreateUserValueCategoryDto) {
    return this.userValueCategory.createUserValueCategory(dto);
  }

  @Get()
  getAll() {
    return this.userValueCategory.getAllUserValueCategory();
  }
}
