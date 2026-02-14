import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsBoolean, IsEmail, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

export enum JobType {
    FULL_TIME,
    PART_TIME
}

export class LocationDTO {
    @IsString()
    @IsNotEmpty()
    city!: string;

    @IsString()
    @IsNotEmpty()
    country!: string;
}

export class CreateJobDTO {
    @IsString()
    @IsNotEmpty()
    companyName!: string;

    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsEmail()
    email!: string;

    @IsIn(Object.keys(JobType))
    @IsOptional()
    type!: JobType;

    @IsInt()
    @IsNotEmpty()
    experience!: number;

    @IsNumber()
    @IsNotEmpty()
    salary!: number;

    @IsString({ each: true })
    @ArrayMinSize(1)
    tags?: string[]

    @IsBoolean()
    @IsOptional()
    isActive!: boolean;

    @ValidateNested()
    @IsArray()
    @Type(() => LocationDTO)
    location!: LocationDTO[];
}