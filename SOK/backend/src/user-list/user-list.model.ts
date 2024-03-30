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
import { Offer } from "src/offer-list/offer-list.model";
import { UserValueCategory } from "src/user-value-category/user-value-category.model";
import { WishList } from "src/wish-list/wish-list.model";

interface UserListAttrs {
  idList?: number;
  idOfferList?: number;
  typeList: number;
}

@Table({ tableName: "user-list" })
export class UserList extends Model<UserList, UserListAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idUserList: number;

  @ForeignKey(() => WishList)
  @Column({ type: DataType.INTEGER })
  idList: number;

  @ForeignKey(() => Offer)
  @Column({ type: DataType.INTEGER })
  idOfferList: number;

  @Column({ type: DataType.INTEGER, allowNull: false }) // здесть значение только 1 или 2
  typeList: number;

  @BelongsTo(() => WishList)
  wishList: WishList;

  @BelongsTo(() => Offer)
  offerList: Offer;

  @HasMany(() => UserValueCategory)
  userValueCategory: UserValueCategory[];
}
