import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConsultationModule } from "./modules/consultation/consultation.module";
import { NoteModule } from "./modules/notes/note.module";
import { PatientModule } from "./modules/patient/patient.module";
import { userModule } from "./modules/user/user.module";

@Module({
  imports: [PatientModule, userModule, ConsultationModule, NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
