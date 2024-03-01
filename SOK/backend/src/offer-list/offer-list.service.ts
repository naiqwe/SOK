import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Offer } from "./offer-list.model";
import { CreateOfferListDto } from "./dto/create-offerlist.dto";

@Injectable()
export class OfferListService {
  constructor(
    @InjectModel(Offer) private userOfferListRepository: typeof Offer
  ) {}

  async createOfferList(dto: CreateOfferListDto) {
    const offer = await this.userOfferListRepository.create(dto);
    return offer;
  }

  async getAllOfferList() {
    const offer = await this.userOfferListRepository.findAll({
      include: { all: true },
    });
    return offer;
  }
}
