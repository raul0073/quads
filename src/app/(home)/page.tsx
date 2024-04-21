import Certifations from "@/components/Certifications";
import Models from "@/components/Models";
import Hero from "../../components/root/Hero";
import SelectedItems from "@/components/SelectedItems";
import FAQ from "@/components/FAQ";
import FooterInfo from "@/components/FooterInfo";

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
