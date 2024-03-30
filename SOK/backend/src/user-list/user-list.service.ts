import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserList } from "./user-list.model";
import { CreateUserListDto } from "./dto/create-userlist.dto";
import { WishList } from "src/wish-list/wish-list.model";
import { Op } from "sequelize";
import { UserValueCategory } from "src/user-value-category/user-value-category.model";

@Injectable()
export class UserListService {
  constructor(
    @InjectModel(UserList) private userListRepository: typeof UserList
  ) {}

  async createUserList(dto: CreateUserListDto) {
    const userList = await this.userListRepository.create(dto);
    return userList;
  }

  async getAllUserList() {
    const userList = await this.userListRepository.findAll({
      include: { all: true },
    });
    return userList;
  }

  async getOfferUserList() {
    const offerUserList = await this.userListRepository.findAll({
      where: {
        typeList: 1,
      },
      include: { all: true },
    });
    return offerUserList;
  }

  async getWishUserList(userId: number) {
    const wishUserList = await this.userListRepository.findAll({
      where: {
        typeList: 2,
      },
      include: [
        {
          model: WishList,
          where: {
            idUser: {
              [Op.ne]: userId,
            },
          },
        },
        {
          model: UserValueCategory,
        },
      ],
    });

    let arr = [];
    wishUserList.map((item) => arr.push(item.userValueCategory));
    return arr;
  }
}
