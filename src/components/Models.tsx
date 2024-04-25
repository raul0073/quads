import {
	AccessoriesCard,
	AdultATVCard,
	YouthATVCard,
} from "./CardDirectionHover";

function Models() {
	return (
		<section className="models bg-black w-full min-h-[70vh] flex items-center">
			
			<div className="w-[90%] md:w-2/3 flex flex-col items-center py-[10vh] mx-auto">
				<h2 className="header text-2xl border-t border-amber-400 font-semibold text-right my-8 text-white">שירותים  </h2>
				<div className="md:grid md:grid-cols-3 gap-2 md:my-12">
					<AdultATVCard />
					<YouthATVCard />
					<AccessoriesCard />
				</div>
			</div>
		</section>
	);
}

export default Models;
