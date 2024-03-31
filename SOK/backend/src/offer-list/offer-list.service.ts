import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Offer } from "./offer-list.model";
import { CreateOfferListDto } from "./dto/create-offerlist.dto";
import { UserListService } from "src/user-list/user-list.service";

@Injectable()
export class OfferListService {
  constructor(
    @InjectModel(Offer) private userOfferListRepository: typeof Offer,
    private userListService: UserListService
  ) {}

  async createOfferList(dto: CreateOfferListDto) {
    const offer = await this.userOfferListRepository.create(dto);
    return offer;
  }
  //задание 2 получение ППК
  async getUserOfferLists(userId: number) {
    const offer = await this.userOfferListRepository.findAll({
      include: { all: true },
      where: {
        idUser: userId,
      },
    });
    return offer;
  }

  //задание 2 получение ОФЕР ЛИСТА ПО ЕГО ID
  async getOfferListsById(idOfferList: number) {
    const offer = await this.userOfferListRepository.findAll({
      include: { all: true },
      where: {
        idOfferList: idOfferList,
      },
    });
    return offer;
  }
}
