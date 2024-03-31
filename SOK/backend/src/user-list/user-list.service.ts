import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserList } from "./user-list.model";
import { CreateUserListDto } from "./dto/create-userlist.dto";
import { WishList } from "src/wish-list/wish-list.model";
import { Model, Op, where } from "sequelize";
import { UserValueCategory } from "src/user-value-category/user-value-category.model";
import { Offer } from "src/offer-list/offer-list.model";
import { User } from "src/users/users.model";
import { Category } from "src/category/category.model";

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

  async getUserListById(idUserList: number) {
    const userList = await this.userListRepository.findOne({
      where: {
        idUserList: idUserList,
      },
      include: [
        {
          model: Offer,
          include: [{ model: User, attributes: ["userName", "rating"] }],
        },
        {
          model: UserValueCategory,
          include: [{ all: true }],
        },
      ],
    });
    return userList;
  }

  async getOfferUserList(userId: number) {
    const offerUserList = await this.userListRepository.findAll({
      where: {
        typeList: 1,
      },
      include: [
        {
          model: Offer,
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
    offerUserList.map((item) => arr.push(item.userValueCategory));
    return arr;
  }

  //вывод всех wishlistов кроме собственного листа пользователя(user)
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

  //вывод wishlistов пользователя(user)
  async getUsersWishLists(userId: number) {
    const wishUserList = await this.userListRepository.findAll({
      where: {
        typeList: 2,
      },
      include: [
        {
          model: WishList,
          where: {
            idUser: userId,
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

  async getArrayOffers(array: Array<any>) {
    const arrayOffers = await this.userListRepository.findAll({
      where: {
        idUserList: {
          [Op.in]: array,
        },
      },
      include: [
        {
          model: Offer,
        },
      ],
    });
    return arrayOffers;
  }

  async getWishOffers(userId: number) {
    const wishListss = await this.getUsersWishLists(userId);
    const offerListss = await this.getOfferUserList(userId);
    let arr = [];
    var intersection = offerListss.filter(function (obj1) {
      return wishListss.some(function (obj2) {
        return obj1.idCategory === obj2.idCategory;
      });
    });

    let result = {
      full: [],
      notFull: [],
      other: [],
    };

    //return wishListss;

    // let tmp = [];

    wishListss.map((list) => {
      let wishCategoryId = [];

      list.map((currentList) => {
        wishCategoryId.push(currentList.idCategory);
      });
      console.log({ category: wishCategoryId });
      // if (tmp.length != 0) {
      //   const areArraysEqual =
      //     JSON.stringify(tmp) === JSON.stringify(wishCategoryId);
      //   if (areArraysEqual) {
      //     return;
      //   }
      // }
      // tmp = [...wishCategoryId];

      offerListss.forEach((obj) => {
        let hasFullMatch = wishCategoryId.every((num) => {
          return obj.some((item) => item.idCategory === num);
        });

        let hasPartialMatch = wishCategoryId.some((num) => {
          return obj.some((item) => item.idCategory === num);
        });

        if (hasFullMatch) {
          result.full.push(obj);
        } else if (hasPartialMatch) {
          result.notFull.push(obj);
        } else {
          result.other.push(obj);
        }
      });
    });

    let resultOfListId = {
      full: [],
      notFull: [],
      other: [],
    };

    result.full.map((item) => {
      resultOfListId.full.push(item[0].idUserList);
    });
    resultOfListId.full = [...new Set(resultOfListId.full)];

    result.notFull.map((item) => {
      resultOfListId.notFull.push(item[0].idUserList);
    });
    resultOfListId.notFull = [...new Set(resultOfListId.notFull)];

    result.other.map((item) => {
      resultOfListId.other.push(item[0].idUserList);
    });
    resultOfListId.other = [...new Set(resultOfListId.other)];

    let resultUsersList = {
      full: [],
      notFull: [],
      other: [],
    };

    for (const userListId of resultOfListId.full) {
      const userList = await this.getUserListById(userListId);
      resultUsersList.full.push(userList);
    }

    for (const userListId of resultOfListId.notFull) {
      const userList = await this.getUserListById(userListId);
      resultUsersList.notFull.push(userList);
    }

    for (const userListId of resultOfListId.other) {
      const userList = await this.getUserListById(userListId);
      resultUsersList.other.push(userList);
    }

    return resultUsersList;
    //return resultOfListId;
    intersection.map((item) => arr.push(item[0].idUserList));
    console.log(intersection);

    return await this.getArrayOffers(arr);
    // return intersection;
  }
}
