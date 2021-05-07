import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { PostNoteDto } from "./dto/post-note.dto";
import { NoteService } from "./note.service";

@Controller("note")
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get("/:id")
  async getNotes(@Param("id", ParseIntPipe) id: number) {
    return await this.noteService.getNotes(id);
  }
  @Post()
  async postNote(@Body() dto: PostNoteDto) {
    return await this.noteService.postNote(dto);
  }
}
