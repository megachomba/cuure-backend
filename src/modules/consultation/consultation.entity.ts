import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Note } from "../notes/note.entity";
import { Patient } from "../patient/patient.entity";
import { User } from "../user/user.entity";

@Entity()
export class Consultation {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column({ type: "timestamptz" })
  date: Date;
  @ManyToOne(() => Patient, (patient) => patient.consultations)
  @JoinColumn({ name: "patientId" })
  patient?: Patient;
  @Column()
  commentaire: string;
  @ManyToOne(() => User, (user) => user.patients)
  @JoinColumn({ name: "userId" })
  user?: User;
  @OneToMany(() => Note, (note) => note.consultation)
  notes?: Note[];
}
