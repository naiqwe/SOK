import { Body, Controller, Get, Post } from "@nestjs/common";
import { BookResponseService } from "./book-response.service";
import { CreateBookResponseDto } from "./dto/create-bookresponse.dto";

@Controller("book-response")
export class BookResponseController {
  constructor(private bookResponseService: BookResponseService) {}

  @Post()
  create(@Body() dto: CreateBookResponseDto) {
    return this.bookResponseService.createBookResponse(dto);
  }

  @Get()
  getAll() {
    return this.bookResponseService.getAllBookResponse();
  }
}
