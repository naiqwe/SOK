import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { WishList } from "./wish-list.model";
import { CreateWishListDto } from "./dto/create-wishlist.dto";

@Injectable()
export class WishListService {
  constructor(
    @InjectModel(WishList) private userWishListRepository: typeof WishList
  ) {}

  async createWishList(dto: CreateWishListDto) {
    const wish = await this.userWishListRepository.create(dto);
    return wish;
  }

  async getAllWishList() {
    const wish = await this.userWishListRepository.findAll({
      include: { all: true },
    });
    return wish;
  }
}
