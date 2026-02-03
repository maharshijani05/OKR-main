import  { Injectable} from '@nestjs/common';
import { ObjectiveDto } from './dto/objective.dto';
import { ObjectiveType } from './interfaces/objective.interface';
import {Pool} from "pg";
import {PrismaService} from "../prisma.service";

@Injectable()
export class ObjectiveService{
    objectives :ObjectiveType[] = [];
    private pool:Pool;
    // constructor() {
    //     this.pool = new Pool({
    //         host: 'localhost',
    //         port: 5432,
    //         user: 'postgres',
    //         password: 'postgres',
    //         database: 'okrs',
    //     })
    // }

    constructor ( private readonly prismaService: PrismaService) {
    }

    getAllObjectives() {
        return this.prismaService.objective.findMany();
    }
    createObjective(objectiveDto: ObjectiveDto) {
        // this.objectives.push({id:'1',...objectiveDto});
        // return {message: 'Objective created successfully'};
        // return this.pool.query(`INSERT INTO objectives (title) VALUES (${objectiveDto.title});`)
        // const query = 'INSERT INTO objectives (title) VALUES ($1) RETURNING *;';
        // return this.pool.query(query, [objectiveDto.title]);
        return this.prismaService.objective.create({
            data:{
                title:objectiveDto.title,
            }
        });
    }
}