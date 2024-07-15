"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Section({ children }: { children: React.ReactNode }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: false, amount: 0.3 });

	return (
		<motion.div
			className="h-full w-full"
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			exit={{ opacity: 0, y: 50 }}
			transition={{
				type: "spring",
				stiffness: 100,
				damping: 20,
				mass: 1,
			}}
		>
			{children}
		</motion.div>
	);
}

const AboutUsPage = () => {
	return (
		<div className="h-full flex justify-between flex-col w-full items-center">
			<div className="flex justify-center items-center w-[80%] min-h-[70vh]">
				<Section>
					<div className="w-full flex flex-col text-start items-start justify-center gap-6 text-neutral-800 text-lg">
						<span className="font-semibold text-7xl text-BLUE ">
							About Us
						</span>
						<span className="w-[90%]">
							AMI is an industry-leading payment processing
							company dedicated to providing our partners and
							merchants with powerful and versatile payment
							solutions. Whether in-store, online, or through
							mobile devices, we offer a comprehensive range of
							payment processing services designed to meet the
							diverse needs of modern businesses.
						</span>
						<span className="w-[90%]">
							Our cutting-edge technology is paired with the
							latest advancements in payment security to ensure
							that transactions are not only fast and efficient
							but also secure and reliable. We understand the
							importance of protecting sensitive financial
							information, and our robust security measures are in
							place to safeguard every transaction.
						</span>
					</div>
				</Section>
				<div className="w-[50%] pl-8 flex items-end justify-end">
					<Section>
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
						>
							<Image
								src={"/pictures/aboutUsHero.png"}
								alt={""}
								height={500}
								width={400}
							/>
						</motion.div>
					</Section>
				</div>
			</div>
			<div className="w-full min-h-[70vh] bg-[url('/misc/blueBigWave.svg')] object-cover bg-no-repeat relative">
				<Section>
					<Image
						src={"/misc/randomSquare.png"}
						alt={""}
						height={500}
						width={400}
						className="absolute top-10 l-10"
					/>
				</Section>
				<Section>
					<div className="flex flex-col items-center justify-center gap-8 py-8">
						<span className="font-medium text-BLUE text-5xl">
							Our Services
						</span>
						<div className="flex justify-center items-center gap-8 w-[60%]">
							<div className="bg-white rounded-lg p-5 flex flex-col justify-center items-center max-w-[400px] gap-6">
								<Image
									src={"/icons/projectIntro.png"}
									alt={""}
									height={60}
									width={60}
								/>
								<span className="text-xl font-medium">Project Introduction</span>
								<span className="text-center font-light">
									At AMI, we take pride in delivering superior
									customer service, ensuring that our clients
									receive the highest level of support and
									satisfaction.
								</span>
							</div>
							<div className="bg-white rounded-lg p-5 flex flex-col justify-center items-center max-w-[400px] gap-6">
								<Image
									src={"/icons/experiencedTeam.png"}
									alt={""}
									height={60}
									width={60}
								/>
								<span className="text-xl font-medium">Project Introduction</span>
								<span className="text-center font-light">
									At AMI, we take pride in delivering superior
									customer service, ensuring that our clients
									receive the highest level of support and
									satisfaction.
								</span>
							</div>
							<div className="bg-white rounded-lg p-5 flex flex-col justify-center items-center max-w-[400px] gap-6">
								<Image
									src={"/icons/seamlessExperience.png"}
									alt={""}
									height={60}
									width={60}
								/>
								<span className="text-xl font-medium">Project Introduction</span>
								<span className="text-center font-light">
									At AMI, we take pride in delivering superior
									customer service, ensuring that our clients
									receive the highest level of support and
									satisfaction.
								</span>
							</div>
							
						</div>
					</div>
				</Section>
			</div>

			<div className="min-h-[60vh] flex justify-between items-center w-[80%]">
				<Section>
					<div className="w-full flex flex-col justify-center gap-8 items-start text-start">
						<span className="text-BLUE font-medium text-6xl">
							Our <span className="font-semibold">Mission</span>
						</span>
						<span className="font-light">
							We help businesses of all sizes pay, get paid,
							optimize, and grow. By leveraging our
							state-of-the-art payment solutions, businesses can
							streamline their payment processes, reduce costs,
							and enhance their overall operational efficiency.
							Our goal is to empower our partners and merchants
							with the tools they need to succeed in today&apos;s
							competitive market.
						</span>
					</div>
				</Section>
				<Section>
					<div className="w-full flex justify-end items-center">
						<Image
							src={"/pictures/aboutUsOurMission.png"}
							alt={""}
							height={600}
							width={400}
						/>
					</div>
				</Section>
			</div>
			<div className="min-h-[60vh] flex justify-between items-center w-[80%]">
				<div className="w-full flex justify-start items-center">
					<Section>
						<Image
							src={"/pictures/aboutUsOurVision.png"}
							alt={""}
							height={600}
							width={400}
						/>
					</Section>
				</div>
				<Section>
					<div className="w-full flex flex-col justify-center gap-8 items-start text-start">
						<span className="text-BLUE font-medium text-6xl">
							Our <span className="font-semibold">Vision</span>
						</span>
						<span className="font-light w-[80%]">
							At AMI, we believe in building strong and lasting
							relationships with our clients. We are dedicated to
							understanding your unique needs and providing
							customized solutions that align with your business
							goals. With our commitment to innovation, security,
							and customer satisfaction, we strive to be your
							trusted partner in payment processing.
						</span>
					</div>
				</Section>
			</div>
		</div>
	);
};

export default AboutUsPage;
