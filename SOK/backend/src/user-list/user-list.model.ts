import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";

interface UserListAttrs {
  idList: number;
  typeList: number;
}

@Table({ tableName: "user-list" })
export class UserList extends Model<UserList, UserListAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idUserList: number;

  @ForeignKey(() => UserList)
  @Column({ type: DataType.INTEGER, allowNull: false })
  idList: number;

  @Column({ type: DataType.INTEGER, allowNull: false }) // здесть значение только 1 или 2
  typeList: number;
}
