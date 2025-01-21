import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Description from "@/components/Description";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alpine AI Solutions",
  description: "Alpine AI Solutions empowers small-to-medium businesses to harness the potential of artificial intelligence for real results. We deliver custom AI solutions tailored to your unique needs, increasing profits and freeing up your time to focus on what matters most.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Description />
      <Contact />
      <Team />
      <About />
      <Faq />
      <Clients />
      { /* <HomeBlogSection posts={posts} /> */ }
    </main>
  );
}
