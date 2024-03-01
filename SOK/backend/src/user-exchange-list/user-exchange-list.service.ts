import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserExchangeList } from "./user-exchange-list.model";
import { CreateUserExchangeListDto } from "./dto/create-userexchangelist.dto";

@Injectable()
export class UserExchangeListService {
  constructor(
    @InjectModel(UserExchangeList)
    private userExchangeListRepository: typeof UserExchangeList
  ) {}

  async createUserExchangeList(dto: CreateUserExchangeListDto) {
    const userExchangeList = await this.userExchangeListRepository.create(dto);
    return userExchangeList;
  }

  async getAllUserExchangeList() {
    const userExchangeList = await this.userExchangeListRepository.findAll({
      include: { all: true },
    });
    return userExchangeList;
  }
}
