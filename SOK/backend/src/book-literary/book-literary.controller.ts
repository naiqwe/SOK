import { Body, Controller, Get, Post } from "@nestjs/common";
import { BookLiteraryService } from "./book-literary.service";
import { CreateBookLiteraryDto } from "./dto/create-bookliterary.dto";

@Controller("book-literary")
export class BookLiteraryController {
  constructor(private bookLiteraryService: BookLiteraryService) {}

  @Post()
  create(@Body() dto: CreateBookLiteraryDto) {
    return this.bookLiteraryService.createBookLiterary(dto);
  }

  @Get()
  getAll() {
    return this.bookLiteraryService.getAllBookLiterary();
  }
}
