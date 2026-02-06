import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UseFilters,
    ValidationPipe
} from '@nestjs/common';
import {ObjectiveService} from "./objective.service";
import {ObjectiveDto} from "./dto/objective.dto";
import {NormalizeStringPipe} from "../normalize-string-pipe/normalize-string.pipe.service";
import {ObjectiveNotFoundFilter} from "./exception-filter/not-found.filter";

@UseFilters(ObjectiveNotFoundFilter)
@Controller('objectives')
export class ObjectiveController {
    constructor(private readonly objectiveService: ObjectiveService ) {
        this.objectiveService = objectiveService;
    }
    @Get()
    getAll() {
      return this.objectiveService.getAll();
    }

    @Get(':objectiveId')
    getById(@Param('objectiveId', ParseIntPipe) id: number){
        return this.objectiveService.getById(id);
    }

    @Post()
    create(@Body('title',new NormalizeStringPipe()) title:string) {
      return this.objectiveService.create(title);
    }
    @Delete(':objectiveId')
    delete(@Param('objectiveId', ParseIntPipe) objectiveId: number) {
      return this.objectiveService.delete(objectiveId);
    }
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() objectiveDto: Partial<ObjectiveDto>) {
        return this.objectiveService.update(id, objectiveDto);
    }

}