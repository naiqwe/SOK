import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";

interface AutorCreationAttrs {
  lastName: string;
  firstName: string;
}

@Table({ tableName: "autor" })
export class Autor extends Model<Autor, AutorCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  idAutor: number;

  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @Column({ type: DataType.STRING })
  firstName: string;
}
