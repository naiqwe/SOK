import { Module } from '@nestjs/common';
import { UserExchangeListService } from './user-exchange-list.service';
import { UserExchangeListController } from './user-exchange-list.controller';

@Module({
  providers: [UserExchangeListService],
  controllers: [UserExchangeListController]
})
export class UserExchangeListModule {}
