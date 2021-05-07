import { EntityRepository, Repository } from "typeorm";
import { User } from "../user/user.entity";
import { PostPatientDto } from "./dto/post-patient.dto";
import { Patient } from "./patient.entity";

@EntityRepository(Patient)
export class PatientRepository extends Repository<Patient> {
  async savePatient(dto: PostPatientDto, user: User) {
    try {
      const patient = this.create({
        nom: dto.nom,
        age: dto.age,
        commentaire: dto.commentaire,
        sexe: dto.sexe,
        adresse: dto.adresse,
        prenom: dto.prenom,
        user,
      });
      return await this.save(patient);
    } catch (e) {
      new Error(e);
    }
  }
  async getPatients(id: number) {
    try {
      const qb: Patient[] = await this.query(
        `select * FROM patient WHERE "userId"=${id}`
      );
      return qb;
    } catch (e) {
      new Error(e);
    }
  }
}
