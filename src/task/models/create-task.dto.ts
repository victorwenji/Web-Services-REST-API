import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsEmpty, IsNotEmpty, IsNumber, isNumber } from "class-validator";

export class CreateTaskDTO {
    @IsNumber() 
    id: number;

    @IsNotEmpty()
    title: string;
    @IsDate()
    @Type(() => Date)
    startedAt: Date;

    @IsBoolean()
    isCompleted: boolean;
}