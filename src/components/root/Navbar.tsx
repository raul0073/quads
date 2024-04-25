"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
function Navbar() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		latest === 0 ? setIsScrolled(false) : setIsScrolled(true);
	});
	if(!isScrolled && isClicked) {setIsClicked(false)}
	return (
		<>
			<section>
				<div
					className={`nav w-full  flex-col p-2
          ${isScrolled ? "bg-neutral-100 flex" : "bg-transparent"}
          fixed top-0 z-50 transition-colors duration-75
          ${isClicked
							? " max-h-screen min-h-[100vh]  items-baseline"
							: "h-[7vh]"
						}`}>
					{isScrolled && (

<div className={`logo w-full flex justify-between items-center`}>
<Logo />
{isScrolled && !isClicked? (
	<MenuIcon
		color="#fbbf24"
		onClick={() => setIsClicked(!isClicked)}
		className="menuIcon"
	/>
) : null}
{isScrolled && isClicked ? (
	<X
		color="#fbbf24"
		onClick={() => setIsClicked(!isClicked)}
		className="menuIcon"
	/>
) : null}
</div>
					)}
					{isClicked && isScrolled && <MobileMenu />}
				</div>
			</section>
		</>
	);
}

export default Navbar;
