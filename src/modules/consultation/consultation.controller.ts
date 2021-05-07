import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { UserService } from "../user/user.service";
import { PostConsultationDto } from "./dto/post-consultation.dto";
import { ConsultationService } from "./consultation.service";

@Controller("consultation")
export class ConsultationController {
  constructor(private readonly consultationService: ConsultationService) {}

  @Get("/:id")
  async getConsultations(@Param("id", ParseIntPipe) id: number) {
    return await this.consultationService.getConsultations(id);
  }
  @Get("/:userId/details/:id")
  async getConsultationDetail(
    @Param("id", ParseIntPipe) id: number,
    @Param("userId", ParseIntPipe) userId: number
  ) {
    return await this.consultationService.getConsultationDetail(userId, id);
  }
  @Post()
  async postConsultation(@Body() dto: PostConsultationDto) {
    return await this.consultationService.postConsultation(dto);
  }
}
