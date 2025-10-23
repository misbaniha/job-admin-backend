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
exports.JobsController = void 0;
const common_1 = require("@nestjs/common");
const jobs_service_1 = require("./jobs.service");
const create_job_dto_1 = require("./dto/create-job.dto");
let JobsController = class JobsController {
    constructor(svc) {
        this.svc = svc;
    }
    create(dto) { return this.svc.create(dto); }
    findAll(title, location, jobType, minSalary, maxSalary) {
        const f = { title, location, jobType };
        if (minSalary)
            f.minSalary = parseInt(minSalary, 10);
        if (maxSalary)
            f.maxSalary = parseInt(maxSalary, 10);
        return this.svc.findAll(f);
    }
};
exports.JobsController = JobsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_job_dto_1.CreateJobDto]),
    __metadata("design:returntype", void 0)
], JobsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('title')),
    __param(1, (0, common_1.Query)('location')),
    __param(2, (0, common_1.Query)('jobType')),
    __param(3, (0, common_1.Query)('minSalary')),
    __param(4, (0, common_1.Query)('maxSalary')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], JobsController.prototype, "findAll", null);
exports.JobsController = JobsController = __decorate([
    (0, common_1.Controller)('api/jobs'),
    __metadata("design:paramtypes", [jobs_service_1.JobsService])
], JobsController);
//# sourceMappingURL=jobs.controller.js.map