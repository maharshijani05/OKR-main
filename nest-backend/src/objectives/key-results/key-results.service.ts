import {Injectable} from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {KeyResultsDto} from "./dto/key-result.dto";
import {ObjectiveNotFoundError} from "../errors/objectiveNotFoundError";
import {KeyResultLimitExceedError} from "./errors/key-result-limit-exceed.error";

@Injectable()
export class KeyResultsService {
    constructor(private readonly prismaService: PrismaService) {

    }

    getAllByObjectiveId(objectiveId: number) {
        return this.prismaService.keyResult.findMany(
            {
                where: {objective_id: Number(objectiveId)},
            }
        )
    }

   async createKeyResult(keyResultDto: KeyResultsDto, objectiveId: number) {
        const objective = await this.prismaService.objective.findUnique({
            where: {id: objectiveId},
            include: {keyResults: true}
        });
        if (!objective) {
            throw new ObjectiveNotFoundError(objectiveId);
        }
        const keyResultLength = objective.keyResults.length

        if(keyResultLength > 2 ){
            throw new KeyResultLimitExceedError(objective.title);
        }
        return this.prismaService.keyResult.create({
            data: {
                ...keyResultDto,
                objective_id: objectiveId,
            }
        })

        return null

    }
}
