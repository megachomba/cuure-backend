import { forwardRef, Module } from "@nestjs/common";
import { ConsultationModule } from "../consultation/consultation.module";
import { userModule } from "../user/user.module";

import { NoteController } from "./note.controller";
import { NoteService } from "./note.service";

@Module({
  imports: [userModule, ConsultationModule],
  controllers: [NoteController],
  providers: [NoteService],
  exports: [NoteService],
})
export class NoteModule {}
