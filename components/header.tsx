"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent } from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { hookstate, useHookstate } from "@hookstate/core";

const countryOptions = [
	{
		code: "us",
		name: "US",
		image: "/countries/us.png",
	},
	{
		code: "in",
		name: "IN",
		image: "/countries/ind.png",
	},
	{
		code: "ca",
		name: "CA",
		image: "/countries/ca.png",
	},
	{
		code: "uae",
		name: "UAE",
		image: "/countries/uae.png",
	},
];

const countryState = hookstate(countryOptions[0]);

const Header = () => {
	const [country, setCountry] = useState("us");
	const currentCountry = useHookstate(countryState);
	const [countryOpen, setCountryOpen] = useState(false);

	const router = useRouter();

	useEffect(() => {
		console.log(countryOptions.filter((c: any) => c.code == country));
		currentCountry.set(
			countryOptions.filter((c: any) => c.code == country)[0]
		);
	}, [country]);

	return (
		<div className="z-50 flex justify-between items-center px-5 py-2 bg-white fixed top-0 w-[90%] m-5 border rounded-[10px] shadow-md">
			<Image
				src={"./logos/blueDots.svg"}
				alt={"AMI"}
				height={100}
				width={130}
				className="cursor-pointer"
				onClick={() => {
					router.push("/");
				}}
			/>

			<div className="flex justify-between gap-5 items-center">
				<Button
					variant={"link"}
					onClick={() => router.push("about-us")}
					className="text-GREY font-medium"
				>
					About Us
				</Button>
				<Button
					variant={"link"}
					onClick={() => router.push("company")}
					className="text-GREY font-medium"
				>
					Company
				</Button>
				<Button
					variant={"link"}
					onClick={() => router.push("software")}
					className="text-GREY font-medium"
				>
					Software
				</Button>
				<Button
					variant={"link"}
					onClick={() => router.push("hardware")}
					className="text-GREY font-medium"
				>
					Hardware
				</Button>
				<Button
					variant={"default"}
					onClick={() => router.push("contact")}
				>
					Contact Us
				</Button>

				<div className="flex gap-1 justify-center items-center ml-4">
					{currentCountry && (
						<Avatar>
							<AvatarImage
								src={currentCountry.get().image}
								alt={currentCountry.get().name}
							/>
						</Avatar>
					)}

					<DropdownMenu
						open={countryOpen}
						onOpenChange={setCountryOpen}
					>
						<DropdownMenuTrigger asChild>
							<Button variant={"ghost"} size={"icon"}>
								<ChevronDownIcon />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="grid grid-cols-1 gap-4 p-4">
							{countryOptions.map((c: any) => {
								return (
									<Button
										key={c.code}
										variant={"ghost"}
										className="flex gap-2 items-center justify-start w-full"
										onClick={() => {
											setCountry(c.code);
											setCountryOpen(false);
										}}
									>
										<Avatar>
											<AvatarImage
												src={c.image}
												alt={c.name}
												className=""
											/>
										</Avatar>
										<span>{c.name}</span>
									</Button>
								);
							})}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</div>
	);
};

export { Header };
