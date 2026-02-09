import { Controller, Get } from "@nestjs/common";
import { UsersStore } from "./users.store";

@Controller("/albums")
export class AlbumsController {

    constructor(private store: UsersStore) { }

    @Get()
    getAlbums() {

        return {
            message: "Albums"
        }
    }
}