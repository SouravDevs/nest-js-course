import { Body, Controller, Post } from "@nestjs/common";

interface VideoDTO {
    id: number;
    name: string;
}

@Controller("/users")
export class UsersController {

    @Post("/video")
    addVideo(@Body("name") body: VideoDTO) {
        const { id, name } = body;
        return { success: { id, name} }
    }
}