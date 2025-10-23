export declare class CreateJobDto {
    title: string;
    companyName: string;
    location: string;
    jobType: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
    salaryMin?: number;
    salaryMax?: number;
    description?: string;
    requirements?: string;
    responsibilities?: string;
    applicationDeadline?: Date;
}
