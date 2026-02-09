import { Controller, Get } from "@nestjs/common";

@Controller("/albums")
export class AlbumsController {

    @Get()
    getAlbums() {
        return {
            message: "Albums"
        }
    }
}