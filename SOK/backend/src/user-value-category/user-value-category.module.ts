import { Module } from '@nestjs/common';
import { UserValueCategoryService } from './user-value-category.service';
import { UserValueCategoryController } from './user-value-category.controller';

@Module({
  providers: [UserValueCategoryService],
  controllers: [UserValueCategoryController]
})
export class UserValueCategoryModule {}
