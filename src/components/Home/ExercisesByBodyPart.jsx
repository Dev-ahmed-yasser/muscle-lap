import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { PartIcon } from "../../assets/Icons";
import useFetch from "../../utils/useFetch";

import Card from "../Card";
import "@splidejs/react-splide/css";
import Skeleton from "../Skeleton";
const options = {
  perPage: 4,
  gap: 30,
  padding: 50,
  isNavigation: false,
  pagination: false,
  drag: "free",
  breakpoints: {
    640: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
    1024: {
      perPage: 3,
    },
  },
};
function ExercisesByBodyPart() {
  const [bodyPart, setBodyPart] = useState("back");
  const [bodyPartsList, setBodyPartList] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const List = localStorage.getItem("bodyparts");
    if (List) {
      setBodyPartList(JSON.parse(List));
      return;
    }
    (async function () {
      const { data } = await useFetch(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      );
      localStorage.bodyParts = data;
      setBodyPartList(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await useFetch(
        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      );
      setData(data);
    })();
  }, [bodyPart]);

  return (
    <>
      {/* splide */}
      <div className="mx-auto max-w-screen-2xl px-5 lg:px-[90px]">
        <Splide options={options} aria-labelledby="basic-example-heading">
          {/* 🩻🩻 SKELETON 🩻🩻 */}
          {data.length < 1 &&
            Array.from({ length: 4 }).map((_, i) => (
              <SplideSlide
                key={i}
                className="flex h-40 cursor-pointer flex-col items-center justify-center"
              >
                <div className="h-40 w-52 animate-pulse rounded-md bg-gray-300" />
              </SplideSlide>
            ))}
          {data.length &&
            bodyPartsList?.map((part) => {
              if (part == "neck") return;
              return (
                <SplideSlide
                  onClick={(e) => setBodyPart(e.target.innerText)}
                  key={part}
                  className={`flex  h-40 min-w-60 cursor-pointer flex-col items-center justify-center rounded-md p-4 text-white hover:bg-blue-600 ${part == bodyPart ? "better-gradient bg-blue-600" : "bg-blue-500/90"}`}
                >
                  <PartIcon
                    width={130}
                    height={130}
                    className="pointer-events-none text-white"
                  />
                  <h1 className="pointer-events-none text-2xl font-bold">
                    {part}
                  </h1>
                </SplideSlide>
              );
            })}
        </Splide>
      </div>
      {/* exercises */}
      <div className="results">
        <Link
          to={"/exercises"}
          className="mx-auto my-12 block px-8 text-center  text-2xl font-extrabold underline decoration-black underline-offset-8 md:px-16 md:text-3xl"
          onClick={() => window.scrollTo(0, 0)}
        >
          More Exercises &#10140;
        </Link>
        {!data.length && (
          <Skeleton>
            {Array(8)
              .fill(0)
              .map((_, idx) => {
                return <Skeleton.New key={"hse" + idx} />;
              })}
          </Skeleton>
        )}
        <div className="related--exercises mx-auto max-w-screen-2xl px-5 lg:px-[90px]">
          <Card data={data} />
        </div>
      </div>
    </>
  );
}
export default ExercisesByBodyPart;
