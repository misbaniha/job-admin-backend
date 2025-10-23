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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const typeorm_1 = require("typeorm");
let Job = class Job {
};
exports.Job = Job;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Job.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Job.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Job.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Job.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'job_type', nullable: true }),
    __metadata("design:type", String)
], Job.prototype, "jobType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'salary_text', nullable: true }),
    __metadata("design:type", String)
], Job.prototype, "salaryText", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'salary_min', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Job.prototype, "salaryMin", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'salary_max', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Job.prototype, "salaryMax", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Job.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Job.prototype, "requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Job.prototype, "responsibilities", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'application_deadline', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], Job.prototype, "applicationDeadline", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Job.prototype, "createdAt", void 0);
exports.Job = Job = __decorate([
    (0, typeorm_1.Entity)({ name: 'jobs' })
], Job);
//# sourceMappingURL=job.entity.js.map