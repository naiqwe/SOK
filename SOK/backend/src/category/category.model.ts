import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";

interface CategoryAttrs {
  name: string;
  idParent: number;
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

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  idParent: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  multiSelect: boolean;
}
