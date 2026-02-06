import {ArgumentsHost, Catch, ExceptionFilter, HttpStatus} from "@nestjs/common";
import {Response} from "express";
import {KeyResultLimitExceedError} from "../errors/key-result-limit-exceed.error";

@Catch(KeyResultLimitExceedError)
export class KeyResultLimitExceedFilter implements ExceptionFilter {
    catch(exception: KeyResultLimitExceedError, host: ArgumentsHost): any {
        const ctx = host.switchToHttp();
        const res: Response = ctx.getResponse();
        res.status(HttpStatus.BAD_REQUEST).send({message: exception.message});
    }

}