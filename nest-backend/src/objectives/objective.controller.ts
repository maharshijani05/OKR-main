import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post} from '@nestjs/common';
import {ObjectiveService} from "./objective.service";
import {ObjectiveDto} from "./dto/objective.dto";

@Controller('objectives')
export class ObjectiveController {
    constructor(private readonly objectiveService: ObjectiveService ) {
        this.objectiveService = objectiveService;
    }
    @Get()
    getAll() {
      return this.objectiveService.getAll();
    }
    @Post()
    create(@Body() objectiveDto: ObjectiveDto) {
      return this.objectiveService.create(objectiveDto);
    }
    @Delete()
    delete(@Body('id') id: number) {
      return this.objectiveService.delete(id);
    }
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() objectiveDto: Partial<ObjectiveDto>) {
        return this.objectiveService.update(id, objectiveDto);
    }

}