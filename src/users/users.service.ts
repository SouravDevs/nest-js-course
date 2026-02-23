import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PROFILE_MODEL, ProfileDocument } from "src/schemas/profile/profile.schema";
import { USER_MODEL, UserDocument } from "src/schemas/user/user.schema";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>,
        @InjectModel(PROFILE_MODEL) private readonly profileModel: Model<ProfileDocument>
        ) {
        console.log(this.userModel)
        console.log(this.profileModel)
    }
    
}