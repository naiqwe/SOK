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
import { ExchangeList } from "src/exchange-list/exchange-list.model";
import { Status } from "src/status/status.model";
import { UserAddress } from "src/user-address/user-address.model";
import { UserList } from "src/user-list/user-list.model";
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

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idUser: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  @ForeignKey(() => Status)
  idStatus: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  @ForeignKey(() => UserAddress)
  idUserAddress: number;

  @BelongsTo(() => User)
  wishListOwner: User;

  @BelongsTo(() => UserAddress)
  address: UserAddress;

  @BelongsTo(() => Status)
  wishStatus: Status;

  @HasOne(() => ExchangeList, {
    foreignKey: "idWishList1",
    sourceKey: "idWishList",
  })
  offerExchangeList: ExchangeList;

  @HasOne(() => ExchangeList, {
    foreignKey: "idWishList2",
    sourceKey: "idWishList",
  })
  acceptExchangeList: ExchangeList;

  @HasMany(() => UserList)
  userList: UserList[];
}
