import  { Injectable} from '@nestjs/common';
import { ObjectiveDto } from './dto/objective.dto';
import { ObjectiveType } from './interfaces/objective.interface';
import {PrismaService} from "../prisma.service";

@Injectable()
export class ObjectiveService{
    objectives :ObjectiveType[] = [];
    constructor ( private readonly prismaService: PrismaService) {
    }

    getAll() {
        return this.prismaService.objective.findMany();
    }
    create(objectiveDto: ObjectiveDto) {
        return this.prismaService.objective.create({
            data:{
                title:objectiveDto.title,
            }
        });
    }
    delete(id:number) {
        return this.prismaService.objective.delete({
            where:{ id }
        })
    }

    update(id: number, objectiveDto: Partial<ObjectiveDto>) {
        return this.prismaService.objective.update({
            where: { id },
            data: objectiveDto
        });
    }
}