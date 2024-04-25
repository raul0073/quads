import { Cog, Leaf, Ribbon, ShieldCheck } from "lucide-react";

function Certifations() {
	return (
		<div className=" bg-amber-400  h-fit flex flex-col items-center justify-center">
							<h2 className="header text-2xl border-t border-black font-semibold mt-[10vh] mb-8 text-white md:text-right">אודותינו  </h2>

			<div className="content flex flex-col md:flex-row  mt-[5vh] mb-[15vh] w-[90%]">
				<div className="border-b md:border-l md:border-b-0  border-gray-300 flex flex-col items-center w-2/3 p-4 mx-auto">
					<span>
						<Cog height={50} width={50} color="white" className="mb-8" />
					</span>
					<p className="text-gray-500 text-center">אגרונומיה פסיכולוגיה בדף, לוח מפתח משחקים גם. בדף או תיבת לערך אתנולוגיה, אל עזה יכול בישול קצרמרים. לחשבון ומהימנה ביולוגיה מה כדי, על ייִדיש המקושרים אחר. קרן עסקים תאולוגיה פילוסופיה על.</p>
				</div>
				<div className="border-b md:border-l md:border-b-0  border-gray-300 flex flex-col items-center w-2/3 p-4 mx-auto mt-2">
					<span>
						<Leaf height={50} width={50} color="white" className="mb-8" />
					</span>
					<p className="text-gray-500 text-center">אגרונומיה פסיכולוגיה בדף, לוח מפתח משחקים גם. בדף או תיבת לערך אתנולוגיה, אל עזה יכול בישול קצרמרים. לחשבון ומהימנה ביולוגיה מה כדי, על ייִדיש המקושרים אחר. קרן עסקים תאולוגיה פילוסופיה על.</p>
				</div>
				<div className="border-b md:border-l md:border-b-0  border-gray-300 flex flex-col items-center w-2/3 p-4 mx-auto mt-2">
					<span>
						<Ribbon height={50} width={50} color="white" className="mb-8" />
					</span>
					<p className="text-gray-500 text-center">אגרונומיה פסיכולוגיה בדף, לוח מפתח משחקים גם. בדף או תיבת לערך אתנולוגיה, אל עזה יכול בישול קצרמרים. לחשבון ומהימנה ביולוגיה מה כדי, על ייִדיש המקושרים אחר. קרן עסקים תאולוגיה פילוסופיה על.</p>
				</div>
				<div className="flex flex-col items-center w-2/3 p-4 mx-auto mt-2">
					<span>
						<ShieldCheck height={50} width={50} color="white" className="mb-8" />
					</span>
					<p className="text-gray-500 text-center">אגרונומיה פסיכולוגיה בדף, לוח מפתח משחקים גם. בדף או תיבת לערך אתנולוגיה, אל עזה יכול בישול קצרמרים. לחשבון ומהימנה ביולוגיה מה כדי, על ייִדיש המקושרים אחר. קרן עסקים תאולוגיה פילוסופיה על.</p>
				</div>
			</div>
		</div>
	);
}

export default Certifations;
