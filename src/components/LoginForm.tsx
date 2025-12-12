"use client";

import { registerAtom } from "@/lib/atom";
import { loginSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtomValue } from "jotai";
import { Fingerprint, Loader } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";
import { Button } from "./shadcnui/button";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";

const LoginForm = () => {
	const register = useAtomValue(registerAtom);
	const {
		handleSubmit,
		control,
		reset,
		formState: { isSubmitting },
	} = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "all",
	});

	const handleLogin = async (login: z.infer<typeof loginSchema>) => {
		await new Promise((resolve) => setTimeout(resolve, 1500));

		if (
			login.email === register.email &&
			login.password === register.password
		) {
			toast.success(`Login successful, ${register.name}👋🏻!`);

			reset();
		} else {
			if (
				login.email !== register.email &&
				login.password !== register.password
			) {
				toast.error("Invalid email and password!");
			} else {
				if (login.email !== register.email) {
					toast.error("Invalid email!");
				}

				if (login.password !== register.password) {
					toast.error("Invalid password!");
				}
			}
		}
	};

	return (
		<form
			onSubmit={handleSubmit(handleLogin)}
			className="grid gap-6">
			<Controller
				name="email"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Email</FieldLabel>
						<Input
							{...field}
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="Enter your email"
							autoComplete="email"
							type="email"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Controller
				name="password"
				control={control}
				render={({ field, fieldState }) => (
					<Field data-invalid={fieldState.invalid}>
						<FieldLabel htmlFor={field.name}>Password</FieldLabel>
						<Input
							{...field}
							id={field.name}
							aria-invalid={fieldState.invalid}
							placeholder="Enter your password"
							autoComplete="new-password"
							type="password"
						/>
						{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
					</Field>
				)}
			/>

			<Button
				type="submit"
				className="cursor-pointer"
				disabled={isSubmitting}>
				{isSubmitting ? (
					<>
						<Loader className="animate-spin" /> Submitting
					</>
				) : (
					<>
						<Fingerprint /> Login
					</>
				)}
			</Button>
		</form>
	);
};

export default LoginForm;
