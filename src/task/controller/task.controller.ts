import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateTaskDTO } from '../models/create-task.dto';
import { UpdateTaskDTO } from '../models/update -task.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { title } from 'process';

@ApiTags('Endpoint related to task')
@ApiSecurity('ACCESS_TOKEN')
@Controller('task')
export class TaskController {
    @Get()
    @ApiOperation({ summary: 'Récupérer la liste des tâches' })
    //@ApiResponse({ status: 200, description: 'Liste des tâches' })
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
    @ApiOperation({ summary: 'Récupérer une tâche par son titre' })
    @ApiParam({ name: 'title', type: String })
    @ApiResponse({ status: 200, description: 'Tâche trouvée' })
    @ApiResponse({ status: 404, description: 'Tâche non trouvée' })
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
    @ApiOperation({ summary: 'Créer une nouvelle tâche' })
    @ApiBody({ type: CreateTaskDTO })
    @HttpCode(201)
    newtask(@Body() taskData:CreateTaskDTO)
    {
        return taskData;
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Modifier partiellement une tâche' })
    @ApiParam({ name: 'id', type: Number })
    @ApiBody({ type: UpdateTaskDTO, required: false })
    @HttpCode(204)
    updatetask(@Param('id') id: string,@Body() newData:UpdateTaskDTO)
    {
        return{id, ...newData}
    }

    @Delete(':id')
     @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({ summary: 'Supprimer une tâche par son ID' })
    @ApiParam({ name: 'id', type: Number })
    @HttpCode(204)
    deleteOnetask(@Param('id') id: string) {
        return `task with id ${id} deleted !`;
       // return The stak has been deleted
    }
}
