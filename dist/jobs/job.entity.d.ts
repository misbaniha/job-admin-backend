export declare class Job {
    id: number;
    title: string;
    company: string;
    location?: string;
    jobType?: string;
    salaryText?: string;
    salaryMin?: number;
    salaryMax?: number;
    description?: string;
    requirements?: string;
    responsibilities?: string;
    applicationDeadline?: Date;
    createdAt: Date;
}
