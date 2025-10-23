import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
export declare class JobsController {
    private readonly svc;
    constructor(svc: JobsService);
    create(dto: CreateJobDto): Promise<import("./job.entity").Job[]>;
    findAll(title?: string, location?: string, jobType?: string, minSalary?: string, maxSalary?: string): Promise<import("./job.entity").Job[]>;
}
