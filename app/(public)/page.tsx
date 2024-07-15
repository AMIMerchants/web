"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const partners = [
	{ name: "Partner 1", logo: "/logos/partner1.png" },
	{ name: "Partner 2", logo: "/logos/partner2.png" },
	{ name: "Partner 3", logo: "/logos/partner3.png" },
	{ name: "Partner 4", logo: "/logos/partner4.png" },
	{ name: "Partner 5", logo: "/logos/partner5.png" },
];

const PartnerMarquee = ({ partners }: { partners: any }) => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const marqueeVariants = {
		animate: {
			x: [-windowWidth, 0],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 20,
					ease: "linear",
				},
			},
		},
	};

	return (
		<div className="overflow-hidden whitespace-nowrap">
			<motion.div
				className="inline-block"
				variants={marqueeVariants}
				animate="animate"
			>
				{partners
					.concat(partners)
					.map((partner: any, index: number) => (
						<div key={index} className="inline-block mx-8">
							<Image
								src={partner.logo}
								alt={partner.name}
								width={100}
								height={50}
								className="h-12 w-auto object-contain"
							/>
						</div>
					))}
			</motion.div>
		</div>
	);
};

function Section({
	children,
	delay = 0,
}: {
	children: React.ReactNode;
	delay?: number;
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.3 });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			exit={{ opacity: 0, y: 50 }}
			transition={{
				type: "spring",
				stiffness: 100,
				damping: 20,
				mass: 1,
				delay: delay,
			}}
		>
			{children}
		</motion.div>
	);
}

export default function Home() {
	const heroImageVariants: Variants = {
		initial: { scale: 1 },
		animate: {
			scale: [1, 1.05, 1],
			transition: {
				duration: 5,
				ease: "easeInOut",
				repeat: Infinity,
				repeatType: "reverse",
			},
		},
	};
	return (
		<div className="h-full flex justify-between flex-col w-full items-center ">
			<div className="h-[70vh] rounded-md relative flex items-center justify-center antialiased w-[90%]">
				<div className="max-w-2xl mx-auto p-4 flex flex-col gap-8 justify-center items-center">
					<h1 className="relative z-10 text-lg md:text-5xl text-start bg-clip-text text-transparent bg-gradient-to-b from-BLUELIGHT to-BLUE font-sans font-bold">
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
					<div className="flex gap-4 w-full items-start">
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
				{/* <motion.div
					className="absolute right-0 -bottom-[400px] -z-10"
					variants={heroImageVariants}
					initial="initial"
					animate="animate"
				> */}
				<Image
					src={"/pictures/hero.png"}
					alt={""}
					height={1000}
					width={1000}
					className="absolute right-0 -bottom-[450px] -z-10 "
				/>
				{/* </motion.div> */}

				{/* <BackgroundBeams /> */}
			</div>

			<div className="h-full w-full absolute"></div>

			<div className="min-h-[30vh] bg-BLUE w-full flex flex-col items-center justify-center gap-4">
				<span className="text-white font-semibold text-3xl w-[90%]">
					Our Values
				</span>
				<div className="w-full flex justify-center items-center gap-8">
					<Section delay={0}>
						<div className="flex flex-col justify-center items-center bg-white max-w-[300px] rounded-lg shadow-sm p-5 gap-2 min-h-[170px]">
							<div className="text-BLUE font-medium flex items-center gap-1">
								<Image
									src={"/icons/security.png"}
									alt={""}
									height={30}
									width={30}
								/>
								<span>Security</span>
							</div>
							<span>
								Advanced encryption and fraud detection
								mechanisms to ensure secure transactions.
							</span>
						</div>
					</Section>
					<Section delay={0.1}>
						<div className="flex flex-col justify-center items-center bg-white max-w-[300px] rounded-lg shadow-sm p-5 gap-2 min-h-[170px]">
							<div className="text-BLUE font-medium flex items-center gap-1">
								<Image
									src={"/icons/security.png"}
									alt={""}
									height={30}
									width={30}
								/>
								<span>Versatility</span>
							</div>
							<span>
								Supports multiple payment methods including
								credit/debit cards, digital wallets, and bank
								transfers.
							</span>
						</div>
					</Section>
					<Section delay={0.2}>
						<div className="flex flex-col justify-center items-center bg-white max-w-[300px] rounded-lg shadow-sm p-5 gap-2 min-h-[170px]">
							<div className="text-BLUE font-medium flex items-center gap-1">
								<Image
									src={"/icons/security.png"}
									alt={""}
									height={30}
									width={30}
								/>
								<span>Seamless Integeration</span>
							</div>
							<span>
								Easily integrates with various e-commerce
								platforms and shopping carts.
							</span>
						</div>
					</Section>
					<Section delay={0.3}>
						<div className="flex flex-col justify-center items-center bg-white max-w-[300px] rounded-lg shadow-sm p-5 gap-2 min-h-[170px]">
							<div className="text-BLUE font-medium flex items-center gap-1">
								<Image
									src={"/icons/security.png"}
									alt={""}
									height={30}
									width={30}
								/>
								<span>Global Reach</span>
							</div>
							<span>
								Enables businesses to accept payments from
								customers around the world.
							</span>
						</div>
					</Section>
					<Section delay={0.4}>
						<div className="flex flex-col justify-center items-center bg-white max-w-[300px] rounded-lg shadow-sm p-5 gap-2 min-h-[170px]">
							<div className="text-BLUE font-medium flex items-center gap-1">
								<Image
									src={"/icons/security.png"}
									alt={""}
									height={30}
									width={30}
								/>
								<span>Compliance</span>
							</div>
							<span>
								Adheres to industry standards such as PCI-DSS,
								ensuring the highest level of data protection.
							</span>
						</div>
					</Section>
				</div>
			</div>

			<div className="min-h-[30vh] bg-white flex items-center justify-center w-[90%]">
				<div className="h-full w-full flex flex-col justify-center items-start gap-8">
					<span className="text-neutral-700 font-semibold text-4xl">ACCEPT PAYMENTS YOUR WAY</span>
					<span className="text-neutral-500 font-light text-sm">
						Nunc convallis semper justo quis tempor. Praesent
						molestie, lorem sed imperdiet tempor, libero urna semper
						urna, facilisis vulputate velit arcu vitae mi. Donec ac
						nisi ex.{" "}
					</span>
				</div>
				<div className="w-full">

				</div>
			</div>

			<div className="min-h-[30vh] bg-BLUE w-full flex items-center justify-center">
				{/* <PartnerMarquee partners={partners} /> */}
				<span className="text-neutral-100 font-semibold text-4xl">
					Our Partners
				</span>
			</div>
		</div>
	);
}
