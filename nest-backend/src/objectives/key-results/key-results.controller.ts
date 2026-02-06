import {Body, Controller, Get, Param, ParseIntPipe, Post, UseFilters} from '@nestjs/common';
import {KeyResultsService} from "./key-results.service";
import {KeyResultsDto} from "./dto/key-result.dto";
import {KeyResultLimitExceedFilter} from "./exception-filters/limit-exceed.filter";

@UseFilters(KeyResultLimitExceedFilter)
@Controller('objectives/:objectiveId/key-results')
export class KeyResultsController {
    constructor(private readonly keyResultsService: KeyResultsService) {
        this.keyResultsService = keyResultsService;
    }

    @Get()
    getAllByObjectiveId(@Param('objectiveId' , ParseIntPipe) objectiveId: number) {
        return this.keyResultsService.getAllByObjectiveId(objectiveId);
    }

    @Post()
    createKeyResult(@Body() keyResultDto: KeyResultsDto, @Param('objectiveId',ParseIntPipe) objectiveId: number) {
        return this.keyResultsService.createKeyResult(keyResultDto, objectiveId);
    }
}
