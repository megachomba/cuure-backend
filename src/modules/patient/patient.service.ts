import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { getConnection } from "typeorm";
import { UserService } from "../user/user.service";
import { PostPatientDto } from "./dto/post-patient.dto";
import { PatientRepository } from "./patient.repository";

@Injectable()
export class PatientService {
  constructor(private readonly userService: UserService) {}
  getRepository() {
    return getConnection().getCustomRepository(PatientRepository);
  }
  async getPatients(id: number) {
    return await this.getRepository().getPatients(id);
  }
  async postPatient(dto: PostPatientDto) {
    const user = (await this.userService.getUsers()).find(
      (user) => user.id == dto.userId
    );

    if (user) {
      return await this.getRepository().savePatient(dto, user);
    } else {
      throw new HttpException("user not found", HttpStatus.NOT_FOUND);
    }
  }
}
