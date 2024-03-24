export class CreateWishTradeBlankDto {
  //wish list dto
  readonly idUser: number;

  //userValueCategory dto
  readonly idCategories: number[];

  //userAddress dto
  readonly addrIndex: string;
  readonly addrCity: string;
  readonly addrSreet: string;
  readonly addrHouse: string;
  readonly addrStructure?: string;
  readonly addrApart?: string;

  //user dto
  readonly firstName: string;
  readonly lastName: string;
  readonly secondName: string;
}
