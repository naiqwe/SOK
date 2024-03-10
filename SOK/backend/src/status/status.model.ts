import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Offer } from "src/offer-list/offer-list.model";
import { UserMsg } from "src/user-msg/user-msg.model";
import { WishList } from "src/wish-list/wish-list.model";

interface StatusAttrs {
  name: string;
}

@Table({ tableName: "status" })
export class Status extends Model<Status, StatusAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idStatus: number;

  @Column({ type: DataType.STRING })
  name: string;

  @HasMany(() => UserMsg)
  userMsg: UserMsg[];

  @HasMany(() => WishList)
  wishList: WishList[];

  @HasMany(() => Offer)
  offer: Offer[];
}
