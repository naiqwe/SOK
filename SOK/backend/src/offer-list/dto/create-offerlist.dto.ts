export class CreateOfferListDto {
  readonly idBookLiterary: number;
  readonly idUser: number;
  readonly ibsn: string;
  readonly yearPublishing: Date;
  readonly idStatus: number;
}
