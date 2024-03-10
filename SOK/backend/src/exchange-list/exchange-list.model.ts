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
import { Offer } from "src/offer-list/offer-list.model";
import { UserExchangeList } from "src/user-exchange-list/user-exchange-list.model";
import { WishList } from "src/wish-list/wish-list.model";

interface ExchangeListAttrs {
  idOfferList1: number;
  idWishList1: number;
  idOfferList2: number;
  idWishList2: number;
  isBoth: boolean;
}

@Table({ tableName: "exchange-list" })
export class ExchangeList extends Model<ExchangeList, ExchangeListAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idExchangeList: number;

  @ForeignKey(() => Offer)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idOfferList1: number;

  @ForeignKey(() => WishList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idWishList1: number;

  @ForeignKey(() => Offer)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idOfferList2: number;

  @ForeignKey(() => WishList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idWishList2: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  isBoth: boolean;

  @HasOne(() => Offer, {
    foreignKey: "idOfferList",
    sourceKey: "idOfferList1",
  })
  offerList1: ExchangeList;

  @HasOne(() => Offer, {
    foreignKey: "idOfferList",
    sourceKey: "idOfferList2",
  })
  offerList2: ExchangeList;

  @HasOne(() => WishList, {
    foreignKey: "idWishList",
    sourceKey: "idWishList1",
  })
  wishList1: ExchangeList;

  @HasOne(() => WishList, {
    foreignKey: "idWishList",
    sourceKey: "idWishList2",
  })
  wishList2: ExchangeList;

  @HasMany(() => UserExchangeList)
  userExchangeList: UserExchangeList[];
}
