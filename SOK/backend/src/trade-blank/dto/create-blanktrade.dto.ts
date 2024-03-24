export class CreateBlankTradeDto {
  //autor dto
  readonly lastName: string;
  readonly firstName: string;
  //book-literary dto
  readonly bookName: string;
  //offer dto
  readonly idUser: number;
  readonly ibsn: string;
  readonly yearPublishing: string;
  readonly idStatus: number;
  //userValueCategory dto
  readonly idCategories: number[];
}
