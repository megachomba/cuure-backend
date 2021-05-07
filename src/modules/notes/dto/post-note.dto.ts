import { IsInt, IsNotEmpty, IsString } from "class-validator";
export class PostNoteDto {
  @IsString()
  @IsNotEmpty()
  content: string;
  @IsInt()
  @IsNotEmpty()
  consultationId: number;
  @IsInt()
  @IsNotEmpty()
  userId: number;
}
