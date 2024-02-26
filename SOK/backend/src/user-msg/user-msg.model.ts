import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";

interface UserMsgCreationAttrs {
  idUser: number;
  text: string;
  notes: string;
  idStatus: string;
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

  @ForeignKey(() => UserMsg)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idUser: number;

  @Column({ type: DataType.STRING, allowNull: false })
  text: string;

  @Column({ type: DataType.STRING })
  notes: string;

  @ForeignKey(() => UserMsg)
  @Column({ type: DataType.STRING, allowNull: false })
  idStatus: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  type: number;
}
