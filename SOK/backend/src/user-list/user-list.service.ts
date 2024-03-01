import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserList } from "./user-list.model";
import { CreateUserListDto } from "./dto/create-userlist.dto";

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
}
