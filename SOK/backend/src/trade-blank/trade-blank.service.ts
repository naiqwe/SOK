import { Injectable } from "@nestjs/common";
import { CreateBlankTradeDto } from "./dto/create-blanktrade.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Autor } from "src/autor/autor.model";
import { AutorService } from "src/autor/autor.service";
import { BookLiteraryService } from "src/book-literary/book-literary.service";
import { OfferListService } from "src/offer-list/offer-list.service";
import { UserValueCategoryService } from "src/user-value-category/user-value-category.service";
import { UserListService } from "src/user-list/user-list.service";

@Injectable()
export class TradeBlankService {
  constructor(
    private autorService: AutorService,
    private bookLiteraryService: BookLiteraryService,
    private offerListService: OfferListService,
    private userValueCategoryService: UserValueCategoryService,
    private userListService: UserListService
  ) {}

  async createTradeBlank(dto: CreateBlankTradeDto) {
    let bookId;
    const targetAutor = await this.autorService.searchAutorByName(
      dto.firstName,
      dto.lastName
    );
    if (targetAutor) {
      const book = await this.bookLiteraryService.createBookLiterary({
        bookName: dto.bookName,
        idAutor: targetAutor.idAutor,
      });

      bookId = book.idBookLiterary;
    } else {
      const autor = await this.autorService.createAutor({
        firstName: dto.firstName,
        lastName: dto.lastName,
      });
      const book = await this.bookLiteraryService.createBookLiterary({
        bookName: dto.bookName,
        idAutor: autor.idAutor,
      });
      bookId = book.idBookLiterary;
    }
    //border

    const offer = await this.offerListService.createOfferList({
      ibsn: dto.ibsn,
      yearPublishing: dto.yearPublishing,
      idBookLiterary: bookId,
      idUser: dto.idUser,
      idStatus: dto.idStatus,
    });

    //border

    const userList = await this.userListService.createUserList({
      idOfferList: offer.idOfferList,
      typeList: 1,
    });

    //border

    dto.idCategories.map(async (item) => {
      const userValueCategory =
        await this.userValueCategoryService.createUserValueCategory({
          idUserList: userList.idUserList,
          idCategory: item,
        });
    });

    return offer;
  }
}
