import { Controller, Inject } from "@nestjs/common";
import { Subject } from "rxjs";

@Controller('/users')
export class UsersController {

    constructor(
        @Inject("EVENT_STORE") private eventBus: Subject<any>,
        @Inject("DB") private db: any
    ) {
        console.log(this.db)
    }
}