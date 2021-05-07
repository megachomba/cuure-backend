import { EntityRepository, Repository } from "typeorm";
import { PostUserDto } from "./dto/post-user.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async postUser(dto: PostUserDto) {
    try {
      const user = await this.find({ where: { nom: dto.nom } });
      if (user.length > 0) {
        return [];
      }
      return await this.save(dto);
    } catch (e) {
      new Error(e);
    }
  }
  async getUsers() {
    try {
      return await this.find();
    } catch (e) {
      new Error(e);
    }
  }
}
