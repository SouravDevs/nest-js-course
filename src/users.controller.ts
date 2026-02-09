import { Controller, Get } from "@nestjs/common";
import { UsersStore } from "./users.store";

@Controller('/users')
export class UsersController {

    constructor(private store: UsersStore) {}

    @Get()
    getUser() {
        return "message"
    }
    
}