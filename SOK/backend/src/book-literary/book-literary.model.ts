import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";

interface BookLiteraryCreationAttrs {
  idAuthor: number;
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

  @ForeignKey(() => BookLiterary)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idAuthor: number;

  @Column({ type: DataType.STRING, allowNull: false })
  bookName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  note: string;
}
