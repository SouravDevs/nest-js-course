import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";


interface CreateUserDTO {
    name: string;
    age: number;
    id: string;
}

let users: CreateUserDTO[] = []

@Controller("/users")
export class UsersController {

    @Post()
    addUser(@Body() createUserDto: CreateUserDTO) {
        users.push(createUserDto)
        console.log(users)
        return "user added"
    }

    @Get()
    getUsers() {
        return users
    }

    @Get(':id')
    getUser(@Param("id") id: number) {
        const user = users.find((user) => +user.id === +id)

        if(!user) {
            return "No user found"
        }
        return user
    }

    @Put(":id")
    updateUser(@Param("id") id: number, @Body() updateUserDTO: CreateUserDTO) {
        const userIdx = users.findIndex((user) => +user.id === +id)

        if(!userIdx) {
            return
        }
        else {
            users[userIdx] = updateUserDTO
            return "User updated"
        }
    }

    @Delete(":id")
    deleteUser(@Param("id") id: number) {
        users = users.filter((user) => +user.id === +id)
        return "User deleted"
    }
}