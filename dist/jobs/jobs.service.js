"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const job_entity_1 = require("./job.entity");
let JobsService = class JobsService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(dto) {
        const j = this.repo.create(dto);
        return this.repo.save(j);
    }
    async findAll(filters) {
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
};
exports.JobsService = JobsService;
exports.JobsService = JobsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(job_entity_1.Job)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JobsService);
//# sourceMappingURL=jobs.service.js.map