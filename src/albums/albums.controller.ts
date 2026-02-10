import { Controller, Get } from "@nestjs/common";
import { AlbumsService } from "./albums.service";
import { UsersService } from "src/users/users.service";

@Controller("/albums")
export class AlbumsController {

    constructor(
        private albumsService: AlbumsService,
        private usersService: UsersService
    ) {
        
    }

    @Get()
    getAlbums() {

        return {
            message: "Albums"
        }
    }
}