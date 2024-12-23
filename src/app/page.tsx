"use client";
import Brahmma from "@/components/Home/Brahmma";
import Constellation from "@/components/Home/Constellation";
import Demo from "@/components/Home/Demo";
import First from "@/components/Home/First";
import Hero from "@/components/Home/Hero";
import Parallax from "@/components/Home/Parallax";

export default function Home() {
  return (
    <main className=" min-h-screen ">
      {/* Hero section is error is solved lottie document error */}
      <Hero />
      <First />
      <Brahmma />
      <Constellation />
      {/* <Parallax /> */}
      <Demo />
      <p className="lastone"></p>
    </main>
  );
}
