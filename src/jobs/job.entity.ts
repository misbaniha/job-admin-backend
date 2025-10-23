import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'jobs' })
export class Job {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  company!: string;

  @Column({ nullable: true })
  location?: string;

  @Column({ name: 'job_type', nullable: true })
  jobType?: string;

  @Column({ name: 'salary_text', nullable: true })
  salaryText?: string;

  @Column({ name: 'salary_min', type: 'int', nullable: true })
  salaryMin?: number;

  @Column({ name: 'salary_max', type: 'int', nullable: true })
  salaryMax?: number;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'text', nullable: true })
  requirements?: string;

  @Column({ type: 'text', nullable: true })
  responsibilities?: string;

  @Column({ name: 'application_deadline', type: 'date', nullable: true })
  applicationDeadline?: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;
}
