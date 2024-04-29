import { PassThrough } from "stream";
import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be two characters")
  .max(20, "username must be more than 20")
  .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")

export const signUpSchema = z.object({
   username: usernameValidation,
   email : z.string().email({message:"Invalid Email address"}) ,
   password : z.string().min(6,{message:"passwword must be atleast 6 character"})
})
