import { Controller, Get, Header, HttpCode, HttpStatus, Req, Res, Redirect } from "@nestjs/common";
import type { Request, Response } from "express"

@Controller("/users")
export class UsersController {

    @Get("/profile")
    // @HttpCode(205)
    @HttpCode(HttpStatus.ACCEPTED)
    @Header("Cache-Control", 'none')
    @Header("X-Name", 'Sourav')
    @Redirect("/users/account", 302)
    getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        // res.status(301) // override
        
        const rn = (Math.random() * 10 + 1)
        if(rn > 5) {
            return {
                url: "/users/account",
                statusCode: 302
            }
        }
        else {
             return {
                url: "/users/wallet",
                statusCode: 302
            }
        }
    }

    @Get("/account")
    getAccount() {
        return "Working account"
    }
    @Get("/wallet")
    getWallet() {
        return "Working wallet"
    }
}