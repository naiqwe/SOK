import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { UserMsg } from "src/user-msg/user-msg.model";

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

  @HasMany(() => UserMsg) //один ко многим, связь Status и UserMsg
  userMsg: UserMsg[];
}
