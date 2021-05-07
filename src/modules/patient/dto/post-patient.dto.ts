import { IsInt, IsNotEmpty, IsString } from "class-validator";
export class PostPatientDto {
  @IsString()
  @IsNotEmpty()
  nom: string;
  @IsString()
  @IsNotEmpty()
  prenom: string;
  @IsInt()
  @IsNotEmpty()
  age: number;
  @IsString()
  sexe: string;
  @IsString()
  adresse: string;
  @IsString()
  commentaire: string;
  @IsInt()
  userId: number;
}
