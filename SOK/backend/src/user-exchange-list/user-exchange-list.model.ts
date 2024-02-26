import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";

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

  @ForeignKey(() => UserExchangeList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idExchangeList: number;

  @ForeignKey(() => UserExchangeList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idOfferList: number;

  @Column({ type: DataType.STRING })
  trackNumber: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  receiving: boolean;
}
