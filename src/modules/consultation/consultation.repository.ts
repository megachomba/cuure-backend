import { EntityRepository, Repository } from "typeorm";
import { User } from "../user/user.entity";
import { PostConsultationDto } from "./dto/post-consultation.dto";
import { Consultation } from "./consultation.entity";
import { Patient } from "../patient/patient.entity";

@EntityRepository(Consultation)
export class ConsultationRepository extends Repository<Consultation> {
  async saveConsultation(
    dto: PostConsultationDto,
    user: User,
    patient: Patient
  ) {
    try {
      const consultation = this.create({
        title: dto.title,
        date: dto.date,
        commentaire: dto.commentaire,
        patient,
        user,
      });
      return await this.save(consultation);
    } catch (e) {
      new Error(e);
    }
  }
  async getConsultations(id: number) {
    try {
      const qb: Consultation[] = await this.query(
        `select id, title, date FROM consultation WHERE "userId"=${id} order by "date" DESC`
      );
      return qb;
    } catch (e) {
      new Error(e);
    }
  }
  async getConsultationDetails(id: number) {
    try {
      const qb: any = await this.query(
        `select * FROM consultation WHERE "id"=${id}`
      );
      return qb;
    } catch (e) {
      new Error(e);
    }
  }
}
