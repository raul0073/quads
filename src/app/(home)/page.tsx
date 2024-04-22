import Certifations from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import FooterInfo from "@/components/FooterInfo";
import Models from "@/components/Models";
import SelectedItems from "@/components/SelectedItems";
import Hero from "../../components/root/Hero";

export default function Home() {
	return (
		<>
			<Hero />
			<Models />
			<Certifations />
			<SelectedItems />
			<FAQ />
			<FooterInfo />
		</>
	);
}
