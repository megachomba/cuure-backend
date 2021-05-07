import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { PostPatientDto } from "./dto/post-patient.dto";
import { PatientService } from "./patient.service";

@Controller("patient")
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get("/:id")
  async getPatients(@Param("id", ParseIntPipe) id: number) {
    return await this.patientService.getPatients(id);
  }
  @Post()
  async postPatient(@Body() dto: PostPatientDto) {
    return await this.patientService.postPatient(dto);
  }
}
