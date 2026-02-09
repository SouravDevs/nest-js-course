import { Controller } from "@nestjs/common";
import { UsersStore } from "./users.store";

@Controller('/users')
export class UsersController {

    constructor(private usersStore: UsersStore) {
        console.log(this.usersStore)
    }

    getUser() {
        this.usersStore.getUsers()
    }
   
}