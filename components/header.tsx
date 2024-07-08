"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const Header = () => {
	const router = useRouter();

	return (
		<div className="w-full flex justify-between items-center px-5 py-2 bg-white shadow-md">
			<Image
				src={"./logos/blueDots.svg"}
				alt={"AMI"}
				height={100}
				width={150}
			/>

			<div className="flex justify-between gap-5 items-center">
				<Button
					variant={"link"}
					onClick={() => router.push("about-us")}
					className="text-BLUE"
				>
					About Us
				</Button>
				<Button
					variant={"link"}
					onClick={() => router.push("company")}
					className="text-BLUE"
				>
					Company
				</Button>
				<Button
					variant={"link"}
					onClick={() => router.push("software")}
					className="text-BLUE"
				>
					Software
				</Button>
				<Button
					variant={"link"}
					onClick={() => router.push("hardware")}
					className="text-BLUE"
				>
					Hardware
				</Button>
				<Button
					variant={"default"}
					onClick={() => router.push("contact")}
					className="bg-BLUE"
				>
					Contact Us
				</Button>

				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Country" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="united-states">United States</SelectItem>
						<SelectItem value="canada">Canada</SelectItem>
						<SelectItem value="india">India</SelectItem>
						<SelectItem value="dubai">Dubai</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export { Header };
