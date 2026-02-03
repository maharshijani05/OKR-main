import  { Injectable} from '@nestjs/common';
import { ObjectiveDto } from './dto/objective.dto';
import { ObjectiveType } from './interfaces/objective.interface';
import {Pool} from "pg";

@Injectable()
export class ObjectiveService{
    objectives :ObjectiveType[] = [];
    private pool:Pool;
    constructor() {
        this.pool = new Pool({
            host: 'localhost',
            port: 5432,
            user: 'postgres',
            password: 'postgres',
            database: 'okrs',
        })
    }

    getAllObjectives() {
        // return this.objectives;
        return this.pool.query('SELECT * FROM objectives;');
    }
    createObjective(objectiveDto: ObjectiveDto) {
        // this.objectives.push({id:'1',...objectiveDto});
        // return {message: 'Objective created successfully'};
        // return this.pool.query(`INSERT INTO objectives (title) VALUES (${objectiveDto.title});`)
        const query = 'INSERT INTO objectives (title) VALUES ($1) RETURNING *;';
        return this.pool.query(query, [objectiveDto.title]);
    }
}