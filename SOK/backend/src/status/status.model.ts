import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";

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
}
