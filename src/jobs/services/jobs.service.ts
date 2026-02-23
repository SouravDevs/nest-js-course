import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JobsService {
    constructor(private readonly configService: ConfigService) {
        const user = this.configService.get<string>('DATABASE_USER')
        const isProd = this.configService.get<boolean>('PROD')

        // Default value is "on" if no variable found called "ssl" in .env file
        const ssl = this.configService.get<string>("ssl", "on")
        
        console.log(user, isProd, ssl)
    }
}