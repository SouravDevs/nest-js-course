import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller('/users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() createUserDto: CreateUserDTO){
        this.usersService.addUser(createUserDto)
        return { message: "User Added"}
    }

    @Get()
    findAllUsers() {
        return this.usersService.getUsers()
    }

    @Get(":id")
    findUser(@Param("id") id: number) {
        return this.usersService.getUser(+id)
    }

    @Put(":id")
    updateUser(@Param("id") id: number, @Body() updateUsetDto: CreateUserDTO) {
        this.usersService.updateUser(+id, updateUsetDto)
        return { message: "User Updated"}
    }

    @Delete(":id")
    deleteUser(@Param("id") id: number) {
        this.usersService.deleteUser(+id)
        return { message: "User Deleted"}
    }
    
}