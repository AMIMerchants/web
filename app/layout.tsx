import type { Metadata } from "next";
import localFont from "@next/font/local";

import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
	title: "American Merchants Inc.",
	description: "Effortless payments, unmatched security, and global reach.",
};

const poppins = localFont({
	src: [
		{
			path: "../public/fonts/Poppins/Poppins-Regular.ttf",
			weight: "400",
		},
		{
			path: "../public/fonts/Poppins/Poppins-Bold.ttf",
			weight: "700",
		},
	],
	variable: "--font-poppins",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${poppins.variable} font-sans`}>
			<body className="min-h-[100vh] w-full flex flex-col gap-5 justify-between items-center overflow-y-scroll no-scrollbar bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 to-white -z-20">
				<Header />
				<ScrollArea className="flex-grow flex flex-col items-center justify-center mt-[100px] no-scrollbar w-full h-full">
					{children}
				</ScrollArea>
				<Footer />
			</body>
		</html>
	);
}
