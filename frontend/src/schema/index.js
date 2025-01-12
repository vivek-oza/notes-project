import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: 
    z.string().min(6,{
        message: "Password must be at least 6 characters long",
    })
});

export const SignupSchema = z.object({
    fullname: z.string().min(3,{
        message: "Please enter name with at least 3 characters",
    }),
    email: z.string().email({
        message: "Please enter a valid email address",
    }),
    password: 
    z.string().min(6,{
        message: "Password must be at least 6 characters long",
    })
});