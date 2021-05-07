import { Type } from "class-transformer";
import { IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class PostConsultationDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  date: Date;
  @IsInt()
  @IsNotEmpty()
  patientId: number;
  @IsInt()
  @IsNotEmpty()
  userId: number;
  @IsString()
  @IsNotEmpty()
  commentaire: string;
}
