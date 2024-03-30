import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserValueCategory } from "./user-value-category.model";
import { CreateUserValueCategoryDto } from "./dto/create-uservaluecategory.dto";

@Injectable()
export class UserValueCategoryService {
  constructor(
    @InjectModel(UserValueCategory)
    private userValueCategoryRepository: typeof UserValueCategory
  ) {}

  async createUserValueCategory(dto: CreateUserValueCategoryDto) {
    const userValueCategory =
      await this.userValueCategoryRepository.create(dto);
    return userValueCategory;
  }

  async getAllUserValueCategory() {
    const userValueCategory = await this.userValueCategoryRepository.findAll({
      include: { all: true },
    });
    return userValueCategory;
  }
}
