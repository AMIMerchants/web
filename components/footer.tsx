import Image from "next/image";
import { Button } from "./ui/button";
import { MobileIcon } from "@radix-ui/react-icons";

const Footer = () => {
	return (
		<div className="w-full min-h-[300px] flex flex-col justify-between items-center bg-slate-800">
			<div className="flex gap-4 items-start justify-between h-full w-full">
				<div className="w-full flex justify-center items-center h-full py-8">
					<Image
						src={"./logos/whiteDots.svg"}
						alt={"AMI"}
						height={100}
						width={200}
						className=""
					/>
				</div>
				<div className="flex flex-col justify-start items-start gap-1 w-full p-5">
					<Button variant={"link"} className="text-slate-400">
						Home
					</Button>
					<Button variant={"link"} className="text-slate-400">
						About Us
					</Button>
					<Button variant={"link"} className="text-slate-400">
						Software
					</Button>
					<Button variant={"link"} className="text-slate-400">
						Hardware
					</Button>
				</div>
				<div className="flex flex-col justify-center items-start py-[50px] gap-4 w-full p-5 text-slate-300">
					<Button className="bg-BLUE">Contact Us</Button>
					<div className="flex gap-1">
						<span> 855-658-9548</span>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-2 items-start justify-start text-slate-400 font-semibold text-lg w-full px-5">
				<div>Locations</div>
				<div className="flex justify-between items-center text-sm font-normal gap-x-6 w-full">
					<div className="max-w-[300px]">
						AMI Merchants Services Inc 13841 Harper Road Surrey, BC
						Canada V3R 5L5
					</div>
					<div className="max-w-[300px]">
						American Merchants Inc 2219 W Olive Ave #106 Burbank, CA
						USA 91506
					</div>

					<div className="max-w-[300px]">
						AMI Merchant Services Pvt Ltd Suite 120 Edmonton Mall
						The Bristol, Gurgaon, India
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-2 w-full p-5 text-xs text-slate-400">
				<div>
					For the US, American Merchants Inc is a registered ISO of
					Wells Fargo Bank, NA, Concord, CA, Fifth Third Bank, N.A.
					Cincinnati, OH, USA and Elavon, Inc. Georgia [a wholly owned
					subsidiary of U.S. Bancorp, Minneapolis, MN]
				</div>
				<div>
					For Canada, American Merchants Inc is a registered ISO of
					Wells Fargo Bank, NA, Concord, CA, Fifth Third Bank, N.A.
					Cincinnati, OH, USA and Elavon, Inc. Georgia [a wholly owned
					subsidiary of U.S. Bancorp, Minneapolis, MN]
				</div>
				<div>
					For India, American Merchants Inc is a registered ISO of
					Wells Fargo Bank, NA, Concord, CA, Fifth Third Bank, N.A.
					Cincinnati, OH, USA and Elavon, Inc. Georgia [a wholly owned
					subsidiary of U.S. Bancorp, Minneapolis, MN]
				</div>
			</div>

			<div className="flex items-center justify-between gap-2 w-full p-5 text-xs text-slate-400">
				<div>
					Copyright © American Merchants Inc. 2007 - 2024. All rights
					reserved. American Merchants Inc. is a registered trade
					mark. Any unauthorised use is expressly prohibited.
				</div>

				<div className="flex justify-between items-center gap-2">
					<Button variant={"link"} className="text-slate-400 text-xs">
						Cookies
					</Button>
					<Button variant={"link"} className="text-slate-400 text-xs">
						Terms of Use
					</Button>
					<Button variant={"link"} className="text-slate-400 text-xs">
						Legal
					</Button>
				</div>
			</div>
		</div>
	);
};

export { Footer };
