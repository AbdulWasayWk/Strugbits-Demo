import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

export const metadata: Metadata = {
	title: "Strugbits Demo",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="body">
				<ThemeProvider theme={theme}>{children}</ThemeProvider>
			</body>
		</html>
	);
}
