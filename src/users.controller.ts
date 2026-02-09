import { Controller, Inject } from "@nestjs/common";
import { Config } from "./config";

@Controller('/users')
export class UsersController {

    constructor(
        @Inject("DB") private db: string,
        @Inject("Mail") private mails: string[],
        private configs: Config
    ) {
        console.log(this.db)
        console.log(this.mails)
        console.log(this.configs)
    }
}