import Camp from "@/components/molecules/Camp";
import Features from "@/components/molecules/Features";
import GetApp from "@/components/molecules/GetApp";
import Guide from "@/components/molecules/Guide";
import Hero from "@/components/molecules/Hero";


export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}