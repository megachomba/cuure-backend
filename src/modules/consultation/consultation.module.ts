import { Module } from "@nestjs/common";

import { PatientModule } from "../patient/patient.module";
import { userModule } from "../user/user.module";

import { ConsultationController } from "./consultation.controller";
import { ConsultationService } from "./consultation.service";

@Module({
  imports: [userModule, PatientModule],
  controllers: [ConsultationController],
  providers: [ConsultationService],
  exports: [ConsultationService],
})
export class ConsultationModule {}
