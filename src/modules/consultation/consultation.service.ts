import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { getConnection } from "typeorm";
import { UserService } from "../user/user.service";
import { PostConsultationDto } from "./dto/post-consultation.dto";
import { ConsultationRepository } from "./consultation.repository";
import { PatientService } from "../patient/patient.service";

@Injectable()
export class ConsultationService {
  constructor(
    private readonly userService: UserService,
    private readonly patientService: PatientService
  ) {}
  getRepository() {
    return getConnection().getCustomRepository(ConsultationRepository);
  }
  async getConsultations(id: number) {
    return await this.getRepository().getConsultations(id);
  }
  async getConsultationDetail(userId: number, id: number) {
    const details = (await this.getRepository().getConsultationDetails(id))[0];
    const patient = (await this.patientService.getPatients(userId)).find(
      (patient) => patient.id == details.patientId
    );
    const o = {
      details,
      patient,
    };

    return o;
  }
  async postConsultation(dto: PostConsultationDto) {
    const user = (await this.userService.getUsers()).find(
      (user) => user.id === dto.userId
    );
    const patient = (await this.patientService.getPatients(dto.userId)).find(
      (patient) => patient.id === dto.patientId
    );
    if (user && patient) {
      return await this.getRepository().saveConsultation(dto, user, patient);
    } else {
      throw new HttpException(
        "user or patient not found",
        HttpStatus.NOT_FOUND
      );
    }
  }
}
