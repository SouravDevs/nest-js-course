import { Controller, Get, Req } from "@nestjs/common";
import type { Request} from "express"

@Controller("/users")
export class UsersController {
    
    @Get("/profile")
    getProfile(@Req() req: Request) {
        return {
            message: "Profile route"
        }
    }
}