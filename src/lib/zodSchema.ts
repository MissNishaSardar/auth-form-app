import z from "zod";

export const registerSchema = z.object({
	name: z.string().min(2, { error: " Input a valid user name" }),
	email: z.email({ error: "Invalid Email" }),
	password: z
		.string()
		.min(8, { error: "Password must be atleast 8 charecters" }),
});
