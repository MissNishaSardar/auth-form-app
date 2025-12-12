"use client";

import { registerSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const RegisterForm = () => {
	const { handleSubmit, control } = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
		mode: "all",
	});

	const handleRegister = async (register: z.infer<typeof registerSchema>) => {
		await new Promise((resolve) => setTimeout(resolve, 1500));

		// setRegister(register);

		// toast.success("Registered successfully!");

		// registerForm.reset();

		// push("/");
	};

	return (
		<form
			onSubmit={handleSubmit(handleRegister)}
			className=""></form>
	);
};

export default RegisterForm;
