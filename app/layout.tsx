import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
	title: "American Merchants Inc.",
	description: "Effortless payments, unmatched security, and global reach.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="min-h-[100vh] w-full flex flex-col gap-5 justify-between bg-[url('https://www.providence.in/images/bg-main.png')]">
				<Header />
				<div className="flex-grow flex flex-col items-center justify-center">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
