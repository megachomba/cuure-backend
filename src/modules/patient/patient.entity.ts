import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Consultation } from "../consultation/consultation.entity";
import { User } from "../user/user.entity";

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nom: string;
  @Column()
  prenom: string;
  @Column()
  adresse: string;
  @Column()
  sexe: string;
  @Column()
  commentaire: string;
  @Column()
  age: number;
  @ManyToOne(() => User, (user) => user.patients)
  @JoinColumn({ name: "userId" })
  user?: User;
  @OneToMany(() => Consultation, (consultation) => consultation.patient)
  consultations?: Consultation[];
}
