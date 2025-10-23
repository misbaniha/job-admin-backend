import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';

@Injectable()
export class JobsService {
  constructor(@InjectRepository(Job) private repo: Repository<Job>) {}

  async create(dto: CreateJobDto) {
    const j = this.repo.create(dto as any);
    return this.repo.save(j);
  }

  async findAll(filters: { title?: string; location?: string; jobType?: string; minSalary?: number; maxSalary?: number }) {
    const qb = this.repo.createQueryBuilder('job');

    if (filters.title) {
      qb.andWhere('LOWER(job.title) LIKE :title', { title: `%${filters.title.toLowerCase()}%` });
    }

    if (filters.location) {
      qb.andWhere('LOWER(job.location) LIKE :location', { location: `%${filters.location.toLowerCase()}%` });
    }

    if (filters.jobType) {
      qb.andWhere('job.jobType = :jobType', { jobType: filters.jobType });
    }

    if (filters.minSalary) {
      qb.andWhere('(job.salary_min IS NOT NULL AND job.salary_min >= :min)', { min: filters.minSalary });
    }

    if (filters.maxSalary) {
      qb.andWhere('(job.salary_max IS NOT NULL AND job.salary_max <= :max)', { max: filters.maxSalary });
    }

    qb.orderBy('job.created_at', 'DESC');
    return qb.getMany();
  }
}
