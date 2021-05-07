import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { getConnection } from "typeorm";
import { ConsultationService } from "../consultation/consultation.service";

import { PostNoteDto } from "./dto/post-note.dto";
import { NoteRepository } from "./note.repository";

@Injectable()
export class NoteService {
  constructor(private readonly consultationService: ConsultationService) {}
  getRepository() {
    return getConnection().getCustomRepository(NoteRepository);
  }
  async getNotes(id: number) {
    return await this.getRepository().getNotes(id);
  }
  async postNote(dto: PostNoteDto) {
    const consultation = (
      await this.consultationService.getConsultations(dto.userId)
    ).find((consultation) => consultation.id == dto.consultationId);
    const bob = await this.consultationService.getConsultations(dto.userId);
    if (consultation) {
      return await this.getRepository().saveNote(dto, consultation);
    } else {
      throw new HttpException("consultation not found", HttpStatus.NOT_FOUND);
    }
  }
}
