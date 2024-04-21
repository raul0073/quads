import { Leaf, Ribbon, Settings } from "lucide-react";

function Certifations() {
	return (
		<div className="bg-gray-600 h-fit flex justify-center">
			<div className="content flex flex-col space-y-4 mt-[15vh] mb-[15vh]">
				<div className="border-b border-amber-400 flex flex-col items-center w-2/3 p-4 mx-auto">
					<h2 className="header text-center font-sans">
						כל הדגמים נבדקו במכון התקנים ויש אישורים להכל רק לרציניים
					</h2>
				</div>
				<div className="border-b border-gray-400 flex flex-col items-center w-2/3 p-4 mx-auto">
					<span>
						<Settings height={50} width={50} color="#fbbf24" className="mb-4" />
					</span>
					<p className="text-white text-center">אגרונומיה פסיכולוגיה בדף, לוח מפתח משחקים גם. בדף או תיבת לערך אתנולוגיה, אל עזה יכול בישול קצרמרים. לחשבון ומהימנה ביולוגיה מה כדי, על ייִדיש המקושרים אחר. קרן עסקים תאולוגיה פילוסופיה על.</p>
				</div>
				<div className="border-b border-gray-400 flex flex-col items-center w-2/3 p-4 mx-auto">
					<span>
						<Leaf height={50} width={50} color="#fbbf24" className="mb-4" />
					</span>
					<p className="text-white text-center">אגרונומיה פסיכולוגיה בדף, לוח מפתח משחקים גם. בדף או תיבת לערך אתנולוגיה, אל עזה יכול בישול קצרמרים. לחשבון ומהימנה ביולוגיה מה כדי, על ייִדיש המקושרים אחר. קרן עסקים תאולוגיה פילוסופיה על.</p>
				</div>
				<div className="flex flex-col items-center w-2/3 p-4 mx-auto">
					<span>
						<Ribbon height={50} width={50} color="#fbbf24" className="mb-4" />
					</span>
					<p className="text-white text-center">אגרונומיה פסיכולוגיה בדף, לוח מפתח משחקים גם. בדף או תיבת לערך אתנולוגיה, אל עזה יכול בישול קצרמרים. לחשבון ומהימנה ביולוגיה מה כדי, על ייִדיש המקושרים אחר. קרן עסקים תאולוגיה פילוסופיה על.</p>
				</div>
			</div>
		</div>
	);
}

export default Certifations;
