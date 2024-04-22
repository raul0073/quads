import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { GrGoogle } from "react-icons/gr";
import { Button } from "../ui/button";

function MobileMenu() {
	return (
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
			<div className="w-full social flex justify-evenly items-center pt-[80vh]">
				<GrGoogle className="cursor-pionter text-amber-600 hover:cursor-pointer hover:animate-bounce duration-75" />
				<BsWhatsapp className="cursor-pionter text-amber-600 hover:cursor-pointer hover:animate-bounce duration-75" />
				<BsInstagram className="cursor-pionter text-amber-600 hover:cursor-pointer hover:animate-bounce duration-75" />
			</div>
		</div>
	);
}

export default MobileMenu;
