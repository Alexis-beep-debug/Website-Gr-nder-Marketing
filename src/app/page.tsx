import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import Challenges from "@/components/Challenges";
import Solution from "@/components/Solution";
import TargetGroup from "@/components/TargetGroup";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      <Challenges />
      <Solution />
      <TargetGroup />
      <Services />
      <Advantages />
      <About />
      <FAQ />
      <CTA />
    </>
  );
}
