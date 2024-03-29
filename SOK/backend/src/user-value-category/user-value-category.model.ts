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
import { Category } from "src/category/category.model";
import { UserList } from "src/user-list/user-list.model";

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

  @ForeignKey(() => UserList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idUserList: number;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idCategory: number;

  @BelongsTo(() => UserList)
  userList: UserList;

  @HasOne(() => Category, {
    foreignKey: "idUserValueCategory",
    sourceKey: "idUserValueCategory",
    as: "IdUserValueCategory",
  })
  category: Category;
}
