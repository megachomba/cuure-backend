import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Consultation } from "../consultation/consultation.entity";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  content: string;

  @ManyToOne(() => Consultation, (consultation) => consultation.notes)
  @JoinColumn({ name: "consultationId" })
  consultation?: Consultation;
}
