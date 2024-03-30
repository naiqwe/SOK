import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Status } from "./status.model";
import { CreateStatusDto } from "./dto/create-status.dto";

@Injectable()
export class StatusService {
  constructor(
    @InjectModel(Status) private userStatusRepository: typeof Status
  ) {}

  async createStatus(dto: CreateStatusDto) {
    const status = await this.userStatusRepository.create(dto);
    return status;
  }

  async getAllStatus() {
    const status = await this.userStatusRepository.findAll({
      include: { all: true },
    });
    return status;
  }
}
