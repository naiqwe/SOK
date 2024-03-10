import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { Autor } from "src/autor/autor.model";
import { BookResponse } from "src/book-response/book-response.model";
import { Offer } from "src/offer-list/offer-list.model";

interface BookLiteraryCreationAttrs {
  idAutor: number;
  bookName: string;
  note: string;
}

@Table({ tableName: "book-literary" })
export class BookLiterary extends Model<
  BookLiterary,
  BookLiteraryCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idBookLiterary: number;

  @ForeignKey(() => Autor)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idAutor: number;

  @Column({ type: DataType.STRING, allowNull: false })
  bookName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  note: string;

  @HasOne(() => Offer, {
    foreignKey: "idOfferList",
    sourceKey: "offerBookLiterary",
    as: "OfferBookLiterary",
  })
  @BelongsTo(() => Autor)
  autorBookLiterary: Autor;

  @HasMany(() => BookResponse)
  bookResponse: BookResponse[];
}
