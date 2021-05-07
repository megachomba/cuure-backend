import { Body, Controller, Get, Post } from "@nestjs/common";
import { PostUserDto } from "./dto/post-user.dto";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }
  @Post()
  async postUser(@Body() dto: PostUserDto) {
    return await this.userService.postUser(dto);
  }
}
