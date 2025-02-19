import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";

export async function GET(){
    dbConnect()
        await User.create({
            email: "kcbishal@getMaxListeners.com",
            username : "Bishaleyyyyy",
            googleId : "123455555",
            profileImage : "This is image"
        })
    return Response.json({
        message : "You hit api route"
    })
}