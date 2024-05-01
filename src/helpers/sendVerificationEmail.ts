import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function SendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
) :Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystry message | Verification code',
            react: VerificationEmail({username,otp:verifyCode}),
          });
        return {success:true,message:"Verification Email send Successfully"}
    } catch (emailError) {
        console.error(" Sending verification email",emailError)
        return {success:false,message:"Failed to send verification email"}
    }
}
