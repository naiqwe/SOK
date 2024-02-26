import { Module } from '@nestjs/common';
import { BookLiteraryService } from './book-literary.service';
import { BookLiteraryController } from './book-literary.controller';

@Module({
  providers: [BookLiteraryService],
  controllers: [BookLiteraryController]
})
export class BookLiteraryModule {}
