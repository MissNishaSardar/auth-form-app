import z from "zod";

export const registerSchema = z.object({
	name: z.string().min(2, " Input a valid user name"),
	email: z.email("Invalid Email"),
	password: z.string().min(8, "Password must be atleast 8 charecters"),
});
