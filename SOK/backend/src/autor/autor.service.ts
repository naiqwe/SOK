import {
  HttpException,
  HttpStatus,
  Injectable,
  NotAcceptableException,
  Param,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Autor } from "./autor.model";
import { CreateAutorDto } from "./dto/create-autor.dto";
import { Sequelize } from "sequelize-typescript";
import { where } from "sequelize";

@Injectable()
export class AutorService {
  constructor(
    @InjectModel(Autor)
    private autorRepository: typeof Autor,
    private sequelize: Sequelize
  ) {}

  async searchAutorByName(firstName: string, lastName: string) {
    const autor = await this.autorRepository.findOne({
      where: { firstName, lastName },
    });
    return autor;
  }

  async createAutor(dto: CreateAutorDto) {
    let existingAutor = await this.autorRepository.findOne({
      where: { firstName: dto.firstName, lastName: dto.lastName },
    });

    if (existingAutor) {
      // Если автор уже существует, можно выбросить ошибку или выполнить необходимые действия
      throw new HttpException(
        "Автор уже существует в базе данных",
        HttpStatus.BAD_REQUEST
      );
    }

    // Если автор не существует, можно создать нового автора в рамках транзакции
    const t = await this.sequelize.transaction();
    try {
      const autor = await this.autorRepository.create(dto, { transaction: t });
      await t.commit();
      return autor;
    } catch (err) {
      await t.rollback();
      throw err;
    }
  }

  async getAllAutor() {
    const autor = await this.autorRepository.findAll({
      include: { all: true },
    });
    return autor;
  }
}
