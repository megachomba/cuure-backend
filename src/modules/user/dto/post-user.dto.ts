import { IsNotEmpty, IsString } from "class-validator";
export class PostUserDto {
  @IsString()
  @IsNotEmpty()
  nom: string;
}
