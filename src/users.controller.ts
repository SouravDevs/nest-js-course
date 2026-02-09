import { Controller, Get, Ip } from "@nestjs/common";

@Controller('/users')
export class UsersController {

    @Get()
    getIP(@Ip() ip: string) {
        console.log(ip)
        return 'success'
    }
   
}