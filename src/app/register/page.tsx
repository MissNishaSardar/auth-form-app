import RegisterForm from "@/components/RegisterForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Register | Auth Form App",
	description: "Register page of Auth-Form-App",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader className="text-center text-2xl">
					<CardTitle>Register</CardTitle>
				</CardHeader>
				<CardContent>
					<RegisterForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
