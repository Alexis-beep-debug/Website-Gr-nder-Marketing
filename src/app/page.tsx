import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import Challenges from "@/components/Challenges";
import Solution from "@/components/Solution";
import TargetGroup from "@/components/TargetGroup";
import Services from "@/components/Services";
import AnimatedCounter from "@/components/AnimatedCounter";
import Advantages from "@/components/Advantages";
import OrbitShowcase from "@/components/OrbitShowcase";
import Testimonials from "@/components/Testimonials";
import Comparison from "@/components/Comparison";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeBanner />
      <ScrollReveal>
        <Challenges />
      </ScrollReveal>
      <ScrollReveal>
        <Solution />
      </ScrollReveal>
      <ScrollReveal>
        <TargetGroup />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <AnimatedCounter />
      <ScrollReveal>
        <Advantages />
      </ScrollReveal>
      <ScrollReveal>
        <OrbitShowcase />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <Comparison />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </>
  );
}
