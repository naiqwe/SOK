import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.model";

interface UserAddressCreationAttrs {
  idUser: number;
  addrIndex: string;
  addrCity: string;
  addrSreet: string;
  addrHouse: string;
  addrStructure: string;
  addrApart: string;
  isDefault: boolean;
}

@Table({ tableName: "users-address" })
export class UserAddress extends Model<UserAddress, UserAddressCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idUserAddress: number;

  @ForeignKey(() => UserAddress)
  @Column({ type: DataType.INTEGER })
  idUser: number;

  @Column({ type: DataType.STRING, allowNull: false })
  addrIndex: string;

  @Column({ type: DataType.STRING, allowNull: false })
  addrCity: string;

  @Column({ type: DataType.STRING, allowNull: false })
  addrSreet: string;

  @Column({ type: DataType.STRING, allowNull: false })
  addrHouse: string;

  @Column({ type: DataType.STRING })
  addrStructure: string;

  @Column({ type: DataType.STRING })
  addrApart: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  isDefault: boolean;
}
