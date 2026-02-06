import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsEmpty, IsNotEmpty, IsNumber, isNumber } from "class-validator";

export class CreateTaskDTO {
    @ApiProperty({
        required:true,
        description:'identifiant de la tache',
        example:7
    })
    @IsNumber() 
    id: number;

    @ApiProperty({ required:true, description: 'Titre de la tâche', example: 'Faire le TP NestJS' })
    @IsNotEmpty()
    title: string;

    @ApiProperty({ required:true, description: 'Date de début de la tâche', example: '2026-02-06T10:30:00.000Z' })
    @IsDate()
    @Type(() => Date)
    startedAt: Date;

    @ApiProperty({ required:false, description: 'Statut de la tâche, pas de statut == non completer', example: false })
    @IsBoolean()
    isCompleted: boolean;

    //une tache qui nas pas de statut est considerer comme "non completer"
}