import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";

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

  // @ForeignKey(() => Offer)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idBookLiterary: number;

  // @ForeignKey(() => Offer)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idUser: number;

  @Column({ type: DataType.STRING }) //null, fix it
  ibsn: string;

  @Column({ type: DataType.STRING, allowNull: false })
  yearPublishing: string;

  // @ForeignKey(() => Offer)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idStatus: number;
}
