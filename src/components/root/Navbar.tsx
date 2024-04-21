"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import Logo from "./Logo";

function Navbar() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		latest === 0 ? setIsScrolled(false) : setIsScrolled(true);
	});

	return (
		<>
			<section>
				<div
					className={`nav w-full flex flex-col p-2
          ${isScrolled ? "bg-neutral-100" : "bg-transparent"}
        
          fixed top-0 z-20 transition-colors duration-75
          ${
						isClicked
							? " max-h-screen min-h-[100vh]  items-baseline"
							: "h-[7vh]"
					}`}>
					<div
						className={`logo flex w-full justify-between items-center ${
							isScrolled ? "" : "hidden"
						}`}>
						<Logo />
						{isScrolled ? (
							<MenuIcon
								color="#fbbf24"
								onClick={() => setIsClicked(!isClicked)}
							/>
						) : null}
					</div>
					{isClicked && isScrolled && (
						<div className="w-full flex justify-start items-center h-screen text-lg px-2 ">
							<ul className="flex flex-col items-start ">
								<Button variant={"link"} className="text-right decoration-amber-400">
									בית{" "}
								</Button>
								<Button variant={"link"} className="text-right decoration-amber-400">
									צור קשר{" "}
								</Button>
								<Button variant={"link"} className="text-right decoration-amber-400">
									טרטוקונים מומלצים
								</Button>
								<Button variant={"link"} className="text-right decoration-amber-400">
									טרקטורונים מקצועיים
								</Button>
								<Button variant={"link"} className="text-right decoration-amber-400">
									טרקטורונים לילדים
								</Button>
								<Button variant={"link"} className="text-right decoration-amber-400">
									חלקי חילוף{" "}
								</Button>
								<Button variant={"link"} className="text-right decoration-amber-400">
									טיפולים{" "}
								</Button>
							</ul>
						</div>
					)}
				</div>
			</section>
		</>
	);
}

export default Navbar;
