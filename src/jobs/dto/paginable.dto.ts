import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class Paginable {
    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    page!: number;

    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    limit!: number;

}