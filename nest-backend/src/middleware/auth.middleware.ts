import {NestMiddleware} from "@nestjs/common";
import {Request,Response,NextFunction} from "express";

export class AuthMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (req.headers["authorization"] === 'valid-token') {
            next();
        } else {
            res.status(401).send({message: "Unauthorized"});
        }
    }
}