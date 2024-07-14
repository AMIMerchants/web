"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
	return (
		<div className="h-full flex justify-between flex-col w-full items-center">
			{/* <div className="min-h-[80vh] flex justify-center items-start w-[90%]">
				<div className="min-h-[70vh] w-full flex flex-col items-start justify-center gap-6">
					<span className="text-BLUE text-4xl font-medium">
						Seamless, secure and swift payment solutions for your{" "}
						<span className="font-semibold relative">
							business.{" "}
							<Image
								src={"/misc/greenSwoosh.png"}
								alt={""}
								height={120}
								width={150}
								className="absolute bottom-0 right-0"
							/>
						</span>
					</span>

					<div className="flex gap-4">
						<Button>Contact Us</Button>
						<Button
							variant={"secondary"}
							className="bg-white border"
						>
							Schedule a Demo
						</Button>
					</div>
				</div>
				<div className="w-full"></div>
				<BackgroundBeams />
			</div> */}

			<div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
				<div className="max-w-2xl mx-auto p-4 flex flex-col gap-8 justify-center items-center">
					<h1 className="relative z-10 text-lg md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-BLUELIGHT to-BLUE text-center font-sans font-bold">
						Seamless, secure and swift payment solutions for your{" "}
						<span className="font-semibold relative bg-clip-text text-transparent bg-gradient-to-b from-BLUELIGHT to-BLUE">
							business.{" "}
							<Image
								src={"/misc/greenSwoosh.png"}
								alt={""}
								height={120}
								width={150}
								className="absolute bottom-0 right-0"
							/>
						</span>
					</h1>
					<div className="flex gap-4">
						<Button>Contact Us</Button>
						<Button
							variant={"secondary"}
							className="bg-white border"
						>
							Schedule a Demo
						</Button>
					</div>
				</div>

				<BackgroundBeams />
			</div>

			<div className="min-h-[30vh] bg-BLUE w-full"></div>
		</div>
	);
}
