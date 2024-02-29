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
import { Status } from "src/status/status.model";
import { User } from "src/users/users.model";

interface UserMsgCreationAttrs {
  idUser: number;
  text: string;
  notes: string;
  idStatus: number;
  type: number;
}

@Table({ tableName: "users-msg" })
export class UserMsg extends Model<UserMsg, UserMsgCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idUserMsg: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idUser: number;

  @Column({ type: DataType.STRING, allowNull: false })
  text: string;

  @Column({ type: DataType.STRING })
  notes: string;

  @ForeignKey(() => Status)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idStatus: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  type: number;

  @BelongsTo(() => User) //принадлежит
  ownerUserMsg: User; //владелец, связь User и UserMsg

  @BelongsTo(() => Status) //принадлежит
  status: Status; //владелец, связь Status и UserMsg
}
