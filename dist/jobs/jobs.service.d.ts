import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './dto/create-job.dto';
export declare class JobsService {
    private repo;
    constructor(repo: Repository<Job>);
    create(dto: CreateJobDto): Promise<Job[]>;
    findAll(filters: {
        title?: string;
        location?: string;
        jobType?: string;
        minSalary?: number;
        maxSalary?: number;
    }): Promise<Job[]>;
}
