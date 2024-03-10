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
import { BookLiterary } from "src/book-literary/book-literary.model";
import { ExchangeList } from "src/exchange-list/exchange-list.model";
import { Status } from "src/status/status.model";
import { UserExchangeList } from "src/user-exchange-list/user-exchange-list.model";
import { UserList } from "src/user-list/user-list.model";
import { User } from "src/users/users.model";

interface OfferListCreationAttrs {
  idBookLiterary: number;
  idUser: number;
  ibsn: string;
  yearPublishing: string;
  idStatus: number;
}

@Table({ tableName: "offers-list" })
export class Offer extends Model<Offer, OfferListCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idOfferList: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idUser: number;

  @Column({ type: DataType.STRING }) //null
  ibsn: string;

  @Column({ type: DataType.STRING, allowNull: false })
  yearPublishing: string;

  @ForeignKey(() => Status)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idStatus: number;

  @HasOne(() => BookLiterary, {
    foreignKey: "offerBookLiterary",
    sourceKey: "idOfferList",
    as: "bookLiterary",
  })
  bookLiterary: BookLiterary;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Status)
  offerStatus: Status;

  @HasOne(() => ExchangeList, {
    foreignKey: "idOfferList1",
    sourceKey: "idOfferList",
  })
  offerExchangeList: ExchangeList;

  @HasOne(() => ExchangeList, {
    foreignKey: "idOfferList2",
    sourceKey: "idOfferList",
  })
  acceptExchangeList: ExchangeList;

  @HasOne(() => UserExchangeList, {
    foreignKey: "idOfferList",
    sourceKey: "idOfferList",
  })
  userExchangeList: UserExchangeList;

  @HasMany(() => UserList)
  userList: UserList[];
}
