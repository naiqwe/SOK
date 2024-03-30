import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { ExchangeList } from "./exchange-list.model";
import { CreateExchangeListDto } from "./dto/create-exchangelist.dto";

@Injectable()
export class ExchangeListService {
  constructor(
    @InjectModel(ExchangeList)
    private exchangeListRepository: typeof ExchangeList
  ) {}

  async createExchangeList(dto: CreateExchangeListDto) {
    const exchangeList = await this.exchangeListRepository.create(dto);
    return exchangeList;
  }

  async getAllExchangeList() {
    const exchangeList = await this.exchangeListRepository.findAll({
      include: { all: true },
    });
    return exchangeList;
  }
}
