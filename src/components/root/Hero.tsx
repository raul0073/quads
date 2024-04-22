"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import "./styles/hero.scss";

function Hero() {
	const [isMobile, setIsMobile] = useState<boolean | null>(null);
	useEffect(() => {
		window.innerWidth <= 760 ? setIsMobile(true) : setIsMobile(false);
		console.log(innerWidth);
	}, []);
	return (
		<div className="relative bg-black  text-white flex overflow-hidden ">
			<div className="content h-[60vh] pt-[20vh] w-full z-10 flex items-center justify-center flex-col p-8 text-right absolute mx-auto left-0 bottom-10">
				<h1 className="text-7xl text-center font-extrabold text-amber-400">
					טרקטורונים חשמליים
				</h1>
				<div className="w-[80%] md:w-1/2 md:flex-row flex flex-col items-center">
					<Button className="w-full mt-12 md:mt-4 md:mx-4 py-6 text-xl">דגמים</Button>
					<Button variant={"secondary"} className="w-full mt-4 py-6 text-xl">
						טיפולים{" "}
					</Button>
				</div>
			</div>
			{isMobile ? (
				<div className="hero2 images bg-gray-50 h-[50vh] w-full"></div>
			) : (
				<video loop autoPlay className="background-video object-cover w-full max-h-screen">
					<source
						src="https://videos.pexels.com/video-files/5319273/5319273-hd_1080_1920_30fps.mp4"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			)}
		</div>
	);
}

export default Hero;
