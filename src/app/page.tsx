import React from "react";
import Link from "next/link";

export default async function Home() {
  return (
    <section
      className="flex bg-cover h-screen bg-center justify-center items-center font-serif text-black"
      style={{ backgroundImage: "url(/images/bm.avif)" }}
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold ">
          Unleashing Curiosity, One Thought at a Time
        </h1>
        <Link href={"/blog"}>
          <button className="px-10 py-3 bg-primary rounded-lg hover:scale-105 mt-3 text-white">
            Explore Now
          </button>
        </Link>
      </div>
    </section>
  );
}
