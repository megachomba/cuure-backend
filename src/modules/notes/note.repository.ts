import { EntityRepository, Repository } from "typeorm";
import { Consultation } from "../consultation/consultation.entity";
import { PostNoteDto } from "./dto/post-note.dto";
import { Note } from "./note.entity";

@EntityRepository(Note)
export class NoteRepository extends Repository<Note> {
  async saveNote(dto: PostNoteDto, consultation: Consultation) {
    try {
      const note = this.create({
        content: dto.content,
        consultation,
      });
      return await this.save(note);
    } catch (e) {
      new Error(e);
    }
  }
  async getNotes(id: number) {
    try {
      const qb: Note[] = await this.query(
        `select * FROM note WHERE "consultationId"=${id}`
      );
      return qb;
    } catch (e) {
      new Error(e);
    }
  }
}
