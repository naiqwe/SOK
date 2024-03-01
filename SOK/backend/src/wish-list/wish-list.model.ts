import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";

interface WishListCreationAttrs {
  idUser: number;
  idStatus: number;
  idUserAddress: number;
}

@Table({ tableName: "wish-list" })
export class WishList extends Model<WishList, WishListCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idWishList: number;

  // @ForeignKey(() => WishList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idUser: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  // @ForeignKey(() => WishList)
  idStatus: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  // @ForeignKey(() => WishList)
  idUserAddress: number;
}
