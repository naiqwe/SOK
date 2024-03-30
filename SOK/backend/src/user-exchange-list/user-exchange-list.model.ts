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
import { Offer } from "src/offer-list/offer-list.model";

interface UserExchangeListAttrs {
  idExchangeList: number;
  idOfferList: number;
  trackNumber: string;
  receiving: boolean;
}

@Table({ tableName: "users-exchange-list" })
export class UserExchangeList extends Model<
  UserExchangeList,
  UserExchangeListAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idUserExchangeList: number;

  @ForeignKey(() => ExchangeList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idExchangeList: number;

  @ForeignKey(() => Offer)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idOfferList: number;

  @Column({ type: DataType.STRING })
  trackNumber: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  receiving: boolean;

  @BelongsTo(() => ExchangeList)
  exchangeList: ExchangeList;

  @HasOne(() => Offer, {
    foreignKey: "idOfferList",
    sourceKey: "idOfferList",
  })
  offerList: Offer;
}
