import { Button } from "../ui/button";
import "./styles/hero.scss";

function Hero() {
	return (
		<div className="relative pt-[10vh] bg-black  text-white flex overflow-hidden ">
			<div className="content h-[60vh] pt-[15vh] w-full z-10 flex items-center justify-center flex-col p-8 text-right absolute mx-auto left-0 bottom-10">
				<h1 className="text-7xl text-center font-extrabold text-amber-400">
					טרקטורונים חשמליים
				</h1>
				<div className="w-[80%] flex flex-col items-center">
					<Button className="w-full mt-12 py-6 text-xl">דגמים</Button>
					<Button variant={"secondary"} className="w-full mt-4 py-6 text-xl">
						טיפולים{" "}
					</Button>
				</div>
			</div>
			<div className="hero2 images bg-gray-50 h-[50vh] w-full"></div>
		</div>
	);
}

export default Hero;
