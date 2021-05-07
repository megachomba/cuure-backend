import { Injectable } from "@nestjs/common";
import { getConnection } from "typeorm";
import { PostUserDto } from "./dto/post-user.dto";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  getRepository() {
    return getConnection().getCustomRepository(UserRepository);
  }
  async getUsers() {
    return this.getRepository().getUsers();
  }
  async postUser(dto: PostUserDto) {
    return this.getRepository().postUser(dto);
  }
}
