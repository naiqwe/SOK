import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";

interface UserValueCategoryAttrs {
  idUserList: number;
  idCategory: number;
}

@Table({ tableName: "user-value-category" })
export class UserValueCategory extends Model<
  UserValueCategory,
  UserValueCategoryAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idUserValueCategory: number;

  @ForeignKey(() => UserValueCategory)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idUserList: number;

  @ForeignKey(() => UserValueCategory)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idCategory: number;
}
