import { Injectable, Scope } from "@nestjs/common";

@Injectable({
    // scope: Scope.REQUEST
    scope: Scope.TRANSIENT,
})
export class UsersStore {
    constructor() {
        console.log("Store init")
    }
}