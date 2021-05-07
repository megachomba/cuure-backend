import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Consultation } from "../consultation/consultation.entity";
import { Patient } from "../patient/patient.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nom: string;
  @OneToMany(() => Patient, (patient) => patient.user)
  patients?: Patient[];
  @OneToMany(() => Consultation, (consultation) => consultation.user)
  consultation?: Consultation[];
}
