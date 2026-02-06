import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CreateTaskDTO } from '../models/create-task.dto';
import { UpdateTaskDTO } from '../models/update -task.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { title } from 'process';

@ApiTags('Endpoint related to task')
//@ApiSecurity('ACCESS_TOKEN')
@Controller('task')
export class TaskController {
    @Get()
    @HttpCode(200)
    alltask() {
        return [
            {
                id: 1,
                title: "Faire le TP REST 1",
                startedAt: "2026-02-06T10:15:00.000Z",
                isCompleted: false
            },
             {
                id: 2,
                title: "Faire le TP REST 2",
                startedAt: "2026-02-06T10:15:00.000Z",
                isCompleted: false
            },
            {
                id: 3,
                title: "Faire le TP REST 3",
                startedAt: "2026-02-06T10:15:00.000Z",
                isCompleted: false
            }
        ]
    }

    @Get(':title')
    @HttpCode(200)
    onetaskByTitle(@Param('title') title: string)
    {
        return {
            title:title,
            startedAt: "2026-02-06T10:15:00.000Z",
            isCompleted: false
        }
    }

    @Post()
    @HttpCode(201)
    newtask(@Body() taskData:CreateTaskDTO)
    {
        return taskData;
    }

    @Patch()
    @HttpCode(204)
    updatetask(@Param('id') id: string,@Body() newData:UpdateTaskDTO)
    {
        return{id, ...newData}
    }

    @Delete(':id')
    @HttpCode(204)
    deleteOnetask(@Param('id') id: string) {
        return `task with id ${id} deleted !`;
       // return The stak has been deleted
    }
}
