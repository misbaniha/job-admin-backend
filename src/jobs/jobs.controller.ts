import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';

@Controller('api/jobs')
export class JobsController {
    constructor(private readonly svc: JobsService) {}
    @Post() create(@Body() dto: CreateJobDto) { return this.svc.create(dto); }
    @Get()
    findAll(@Query('title') title?: string, @Query('location') location?: string, @Query('jobType') jobType?: string, @Query('minSalary') minSalary?: string, @Query('maxSalary') maxSalary?: string) {
        const f: any = { title, location, jobType };
        if (minSalary) f.minSalary = parseInt(minSalary, 10);
        if (maxSalary) f.maxSalary = parseInt(maxSalary, 10);
        return this.svc.findAll(f);
    }
}
