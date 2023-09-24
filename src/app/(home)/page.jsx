import Image from "next/image";
import HeroSlider from "./HeroSlider";
import Categorise from "./Categories";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Categorise />
    </div>
  );
}
