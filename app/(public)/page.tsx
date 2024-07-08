"use client";

import Lottie from "react-lottie";
import animationData from "../../public/lottie/hero.json";

export default function Home() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className="h-full flex justify-between flex-col w-[90%]">
			<div className="flex justify-between items-center py-5 px-[100px] bg-white rounded-lg shadow-lg min-h-[80vh]">
				<div className="font-bold text-[48px] inline-block bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-7xl text-transparent">
					Seamless, secure and swift payment solutions for your
					business.
				</div>
				<div className="min-w-[500px] h-full">
					<Lottie options={defaultOptions} height={600} width={600} />
				</div>
			</div>
		</div>
	);
}
