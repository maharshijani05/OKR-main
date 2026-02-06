import {Injectable} from '@nestjs/common';
import {ObjectiveDto} from './dto/objective.dto';
import {ObjectiveType} from './interfaces/objective.interface';
import {PrismaService} from "../prisma.service";
import {ObjectiveNotFoundError} from "./errors/objectiveNotFoundError";

@Injectable()
export class ObjectiveService {
    objectives: ObjectiveType[] = [];

    constructor(private readonly prismaService: PrismaService) {
    }

    getAll() {
        return this.prismaService.objective.findMany({include: {keyResults: true}});
    }

    async getById(objectiveId: number) {
        const objective = await this.prismaService.objective.findUnique({
                where: {id: objectiveId},
                include: {keyResults: true}
            }
        )
        if (!objective) {
            throw new ObjectiveNotFoundError(objectiveId);
        }
        return objective;
    }

    create(title: string) {
        console.log(title);
        return this.prismaService.objective.create({
            data: {
                title: title,
            }
        });
    }

    async delete(id: number) {
        const objective = await this.prismaService.objective.findUnique(
            {
                where: {id}
            }
        )
        if (!objective) {
            throw new ObjectiveNotFoundError(id)
        }
        return this.prismaService.objective.delete({
            where: {id}
        })
    }

    async update(id: number, objectiveDto: Partial<ObjectiveDto>) {
        const objective = await this.prismaService.objective.findUnique(
            {
                where: {id}
            }
        )
        if (!objective) {
            throw new ObjectiveNotFoundError(id)
        }
        return this.prismaService.objective.update({
            where: {id},
            data: objectiveDto
        });
    }

}