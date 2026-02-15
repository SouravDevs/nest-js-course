import { HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export function userAgent(req: Request, res: Response, next: NextFunction) {
    const ua = req.headers["user-agent"];

    console.log(ua)

    req["ua"] = ua

    res.status(HttpStatus.ACCEPTED).json({ success: true, ua, message: "userAgent middleware" })
    // throw new BadRequestException()

    // next()
}

export class userAgentOptions {
    accepted?: string[];
}

@Injectable()
export class UserAgentMiddleware implements NestMiddleware {

    constructor(private options: userAgentOptions) { }

    use(req: Request, res: Response, next: NextFunction) {
        const ua = req.headers["user-agent"]

        console.log(ua)

        if (!this.isUserAgentAcceptable(ua)) {
            res.status(HttpStatus.FORBIDDEN).json({ message: "Not Allowed" })
            return
        }

        req["ua"] = ua

        next()

    }

    private isUserAgentAcceptable(userAgent: any) {
        // const acceptedUserAgents = ["chrome", "firefox"]

        const acceptedUserAgents = this.options?.accepted || []

        if (!acceptedUserAgents.length) {
            return true;
        }

        return acceptedUserAgents.some((agent) =>
            userAgent.toLocaleLowerCase().includes(agent.toLocaleLowerCase()))
    }

}