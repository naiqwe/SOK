import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { BookLiterary } from "src/book-literary/book-literary.model";
import { User } from "src/users/users.model";

interface BookResponseCreationAttrs {
  idBookLiterary: number;
  idUser: number;
  response: string;
  note: string;
}

@Table({ tableName: "book-response" })
export class BookResponse extends Model<
  BookResponse,
  BookResponseCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idBookResponse: number;

  @ForeignKey(() => BookLiterary)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idBookLiterary: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idUser: number;

  @Column({ type: DataType.STRING, allowNull: false })
  response: string;

  @Column({ type: DataType.STRING })
  note: string;

  @BelongsTo(() => BookLiterary)
  bookLiterary: BookLiterary;

  @BelongsTo(() => User)
  user: User;
}
