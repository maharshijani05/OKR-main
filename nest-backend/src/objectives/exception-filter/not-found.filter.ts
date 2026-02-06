import {ArgumentsHost, Catch, ExceptionFilter, HttpStatus} from "@nestjs/common";
import {ObjectiveNotFoundError} from "../errors/objectiveNotFoundError";
import {Response} from "express";

@Catch(ObjectiveNotFoundError)
export class ObjectiveNotFoundFilter implements ExceptionFilter {
    catch(exception: ObjectiveNotFoundError, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const response: Response = ctx.getResponse();
        response.status(HttpStatus.NOT_FOUND).send({message: exception.message});
    }
}