import HeroSection from "../components/Home/HeroSection";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import ExercisesByBodyPart from "../components/Home/ExercisesByBodyPart";
import { MetaTags } from "../utils/MetaTags";
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const getStarted = useRef();
  function scrollToStart() {
    getStarted.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  return (
    <section>
      <MetaTags>
        <link rel="prefetch" href="/assets/template.webp" as="image" />
      </MetaTags>
      {/* hero section */}
      <HeroSection scrollToStart={scrollToStart} />
      <section className="bg-white pb-16" ref={getStarted}>
        <div className="mx-auto max-w-screen-2xl">
          <h1 className="py-12 text-center text-4xl font-medium lg:text-5xl">
            Awesome Exercises for All Levels
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex justify-center py-7"
          >
            <input
              type="search"
              placeholder="'back' or 'deadlift'"
              className="h-12 w-2/4 border-2 border-slate-300 border-r-transparent ps-4 text-lg outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button>
              <Link
                to={`/search/${searchTerm}`}
                className="better-gradient block h-12 bg-blue-600 px-8 font-medium leading-[3rem] text-white duration-200 hover:bg-blue-700"
                ref={getStarted}
              >
                Search
              </Link>
            </button>
          </form>
        </div>
        <ExercisesByBodyPart />
      </section>
    </section>
  );
}
