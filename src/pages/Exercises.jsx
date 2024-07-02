import { useEffect, useRef } from "react";
import PaginatedExercises from "../components/PaginatedExercises";
import { useExercisesContext } from "../utils/ExercisesContext";
import useFetch from "../utils/useFetch";
import ogImage from "../assets/exercises.png";
import { MetaTags } from "../utils/MetaTags";
export default function Exercises() {
  document.title = "MuscleLap | Exercises";
  const { exercises, setExercises } = useExercisesContext();
  async function fetchExercises() {
    const { data } = await useFetch(
      "https://exercisedb.p.rapidapi.com/exercises?limit=1000",
      "GET",
    );
    setExercises(data);
  }
  useEffect(() => {
    if (exercises.length < 1) {
      fetchExercises();
      return;
    }
  }, []);
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
      <MetaTags img={ogImage} title={"Exercises | MuscleLap"} />
      {/* background */}
      <div className="flex  h-screen  w-full flex-col items-center justify-center gap-y-6 bg-[url('/src/assets/template2.webp')] bg-cover bg-bottom bg-no-repeat px-4  text-white">
        <h1 className=" font-anton text-xl uppercase md:text-2xl lg:text-3xl">
          Move your body
        </h1>
        <span className="font-anton text-6xl uppercase md:text-8xl lg:text-9xl">
          Stay active
        </span>
        <p className="max-w-[420px] text-center text-sm md:text-base">
          Muscle Lap is your ultimate online resource for building strength,
          improving endurance, and achieving your fitness goals.
        </p>
        <button
          className="mb-32 h-14 w-40 rounded-xl bg-blue-600 font-medium hover:bg-blue-700"
          onClick={scrollToStart}
        >
          Get Started
        </button>
      </div>

      <div className="exercises overflow-hidden bg-white" ref={getStarted}>
        <PaginatedExercises exercises={exercises} />
      </div>
    </section>
  );
}
