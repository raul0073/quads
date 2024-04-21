import {
	AccessoriesCard,
	AdultATVCard,
	YouthATVCard,
} from "./CardDirectionHover";

function Models() {
	return (
		<section className="models bg-neutral-300 w-full min-h-[70vh] flex items-center">
			
			<div className="w-[90%] md:w-2/3 flex flex-col items-center py-[10vh] mx-auto">
				<h2 className="cat text-2xl border-t border-amber-400 font-semibold text-right my-8">המבחר שלנו </h2>
				<div className="md:grid md:grid-cols-3 gap-2 ">
					<AdultATVCard />
					<YouthATVCard />
					<AccessoriesCard />
				</div>
			</div>
		</section>
	);
}

export default Models;
