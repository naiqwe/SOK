import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { BookResponse } from "./book-response.model";
import { CreateBookResponseDto } from "./dto/create-bookresponse.dto";

@Injectable()
export class BookResponseService {
  constructor(
    @InjectModel(BookResponse)
    private bookResponseRepository: typeof BookResponse
  ) {}

  async createBookResponse(dto: CreateBookResponseDto) {
    const bookResponse = await this.bookResponseRepository.create(dto);
    return bookResponse;
  }

  async getAllBookResponse() {
    const bookResponse = await this.bookResponseRepository.findAll({
      include: { all: true },
    });
    return bookResponse;
  }
}
