import { Controller, Get, Param, Query, Headers } from "@nestjs/common";

interface VideoParams {
    id: number;
    name: string
}

interface VideoQuery {
    id: number;
    name: string
}

@Controller("/users")
export class UsersController {

    @Get("/videos/:id/:name")
    getVideos(@Param() params: VideoParams) {
        console.log(params.id, params.name)
        return "success"
    }

    @Get("/videos")
    getPhotos(@Query() query: VideoQuery, @Headers("hii") headers: Record<string, any>) {
        console.log(headers)
        return "success"
    }
}