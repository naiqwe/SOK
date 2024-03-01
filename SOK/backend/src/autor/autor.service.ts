import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Autor } from "./autor.model";
import { CreateAutorDto } from "./dto/create-autor.dto";

@Injectable()
export class AutorService {
  constructor(@InjectModel(Autor) private autorRepository: typeof Autor) {}

  async createAutor(dto: CreateAutorDto) {
    const autor = await this.autorRepository.create(dto);
    return autor;
  }

  async getAllAutor() {
    const autor = await this.autorRepository.findAll({
      include: { all: true },
    });
    return autor;
  }
}
