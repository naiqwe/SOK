import { Module } from '@nestjs/common';
import { BookResponseService } from './book-response.service';
import { BookResponseController } from './book-response.controller';

@Module({
  providers: [BookResponseService],
  controllers: [BookResponseController]
})
export class BookResponseModule {}
