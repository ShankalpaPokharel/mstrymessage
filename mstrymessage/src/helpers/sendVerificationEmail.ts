import {resend} from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";

import { ApiRespoonse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiRespoonse>{
    try{
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to:email,
            subject: 'Mystry message | Verification code',
            react: VerificationEmail({username,otp:verifyCode}),
          });
        return {success:true,message:"Failed to send verification email"}
    }
    catch(emailError){
        console.error("Error sending verification email",emailError)
        return {success:false,message:"Failed to send verification email"}
    }
} 