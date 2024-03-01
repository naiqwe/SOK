import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BookLiterary } from "./book-literary.model";
import { CreateBookLiteraryDto } from "./dto/create-bookliterary.dto";

@Injectable()
export class BookLiteraryService {
  constructor(
    @InjectModel(BookLiterary)
    private bookLiteraryRepository: typeof BookLiterary
  ) {}

  async createBookLiterary(dto: CreateBookLiteraryDto) {
    const bookLiterary = await this.bookLiteraryRepository.create(dto);
    return bookLiterary;
  }

  async getAllBookLiterary() {
    const bookLiterary = await this.bookLiteraryRepository.findAll({
      include: { all: true },
    });
    return bookLiterary;
  }
}
