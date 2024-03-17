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
import { UserValueCategory } from "src/user-value-category/user-value-category.model";

interface CategoryAttrs {
  name: string;
  idParent?: number;

  multiSelect: boolean;
}

@Table({ tableName: "category" })
export class Category extends Model<Category, CategoryAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idCategory: number;

  // @ForeignKey(() => Category)
  // @Column({ type: DataType.INTEGER, defaultValue: null })
  // idParent: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  multiSelect: boolean;

  @HasOne(() => UserValueCategory, {
    foreignKey: "idUserValueCategory",
    sourceKey: "idUserValueCategory",
    as: "IdUserValueCategory",
  })
  idUserValueCategory: UserValueCategory;

  @BelongsTo(() => Category, {
    foreignKey: "idParent",
    as: "parentCategory",
    targetKey: "idCategory",
  })
  parentCategory: Category;

  @HasMany(() => Category, {
    foreignKey: "idParent",
    as: "subCategory",
  })
  subCategory: Category[];
}
