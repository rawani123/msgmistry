import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user.model";
import bcrypt from "bcryptjs"
import { SendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request:Request) {
    await dbConnect();

    try {
        const {username,email,password}=await request.json()
        
    } catch (error) {
        console.error("Error registering User",error)
        return Response.json({
            success:false,
            message:"Error registering user"
        },{
            status:500
        })
    }
}