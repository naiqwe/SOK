import { Module } from '@nestjs/common';
import { OfferListService } from './offer-list.service';
import { OfferListController } from './offer-list.controller';

@Module({
  providers: [OfferListService],
  controllers: [OfferListController]
})
export class OfferListModule {}
