import  { Injectable } from '@nestjs/common';

@Injectable()
export class ObjectiveService{
    getAllObjectives() {
        return {message: 'Get all objectives from service'};
    }
}