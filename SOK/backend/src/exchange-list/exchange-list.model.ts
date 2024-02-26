import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";

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

  @ForeignKey(() => ExchangeList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idOfferList1: number;

  @ForeignKey(() => ExchangeList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idWishList1: number;

  @ForeignKey(() => ExchangeList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idOfferList2: number;

  @ForeignKey(() => ExchangeList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idWishList2: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  isBoth: boolean;
}
