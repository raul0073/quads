import Footer from "@/components/root/Footer";
import Navbar from "@/components/root/Navbar";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
	return (
		<section className="main relative">
			<nav>
				<Navbar />
			</nav>
			<main className="relative max-h-screen">{children}</main>
			<footer className="fixed bottom-0 left-0 w-full z-10">
				<Footer />
			</footer>
			
		</section>
	);
}

export default Layout;
