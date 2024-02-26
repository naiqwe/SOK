import { Module } from '@nestjs/common';
import { ExchangeListService } from './exchange-list.service';
import { ExchangeListController } from './exchange-list.controller';

@Module({
  providers: [ExchangeListService],
  controllers: [ExchangeListController]
})
export class ExchangeListModule {}
