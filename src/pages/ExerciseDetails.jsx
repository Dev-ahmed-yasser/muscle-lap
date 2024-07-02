import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch, { getYoutubeVideos } from "../utils/useFetch";
import { MetaTags } from "../utils/MetaTags";

export default function ExerciseDetails() {
  const id = useParams().id;
  const results = useRef();
  const [details, setDetails] = useState({});
  const [ytdata, setYtdata] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    // scroll to the result
    results.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // fetching details and videos
    async function fetching() {
      const { data } = await useFetch(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
      );
      if (!data) nav("/exercise/notfound");
      const ytvids = await getYoutubeVideos(data.name);
      setDetails(data);
      setYtdata(ytvids.slice(0, 6));
    }
    fetching();
  }, [id]);

  const animateClass = "animate-pulse bg-gray-300 rounded-md";
  if (Object.keys(details).length === 0) {
    return (
      <section>
        <MetaTags title={details.name} />
        <div className="absolute top-0 h-14 w-full bg-gray-800 md:h-[88px]"></div>

        <div className="mx-auto min-h-screen max-w-screen-xl">
          <div className="mt-20 gap-4 px-8 md:mt-32 md:grid md:h-[600px] md:grid-cols-12 md:grid-rows-12">
            <div
              className={`title ${animateClass} h-12 max-[767px]:h-10 max-[767px]:w-1/2 md:col-start-7 md:col-end-11 md:row-start-1 md:row-end-2`}
            />

            <div
              className={`image ${animateClass} max-[767px]:mt-4 max-[767px]:h-[500px] max-[767px]:w-full md:col-start-1 md:col-end-7 md:row-span-full`}
            />

            <div
              className={`steps ${animateClass} mt-2 max-[767px]:h-96 max-[767px]:w-full md:col-start-7 md:col-end-13 md:row-start-2 md:row-end-11`}
            />

            <div
              className={`equipment ${animateClass} pt-2 max-[767px]:mt-4 max-[767px]:h-8 max-[767px]:w-1/2 md:col-start-7 md:col-end-10 md:row-start-11 md:row-end-12`}
            />

            <div
              className={`muscle-worked ${animateClass} pt-2 max-[767px]:mt-4 max-[767px]:h-8 max-[767px]:w-1/2 md:col-start-7 md:col-end-10 md:row-start-12 md:row-end-13`}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto min-h-screen max-w-screen-xl">
      <div className="absolute left-0 top-0 h-14 w-full bg-gray-800 md:h-[88px]"></div>

      <div className="wrapper mt-20 gap-7 px-8 md:mt-32 md:grid md:h-[600px] md:grid-cols-12 md:grid-rows-12">
        <div
          className={`title text-3xl font-bold md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-2 lg:text-5xl`}
        >
          {details.name}
        </div>
        <div
          className={`image max-[767px]:mt-4 md:col-start-1 md:col-end-7 md:row-span-full`}
        >
          <img
            src={details.gifUrl}
            alt={details.name}
            width={600}
            height={400}
            decoding="async"
            loading="eager"
            className="object-cover mix-blend-darken md:size-full"
          />
        </div>
        <div
          className={`steps mt-2 md:col-start-7 md:col-end-13 md:row-start-3 md:row-end-11`}
        >
          <ol className="list-disc space-y-2 text-sm font-medium lg:text-base">
            {details.instructions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <div className="mt-4 text-base">
            <span className="font-bold text-blue-600">
              Equipment needed:&nbsp;
            </span>
            {details.equipment}
          </div>
          <div className="mt-4 text-base">
            <span className="font-bold text-blue-600">
              Muscles worked:&nbsp;
            </span>
            <span>
              {details.secondaryMuscles
                .slice(0, -1)
                .join(",")
                .concat(" , ", details.secondaryMuscles.slice(-1))}
              .
            </span>
          </div>
        </div>
      </div>
      {/* youtube videos of the exercise */}
      <div className="related videos overflow-hidden px-8 py-20">
        <h1 className=" py-6 text-3xl font-medium md:text-4xl">
          Watch&nbsp;
          <span className="font-bold text-red-600">{details.name}&nbsp;</span>
          exercise videos
        </h1>
        <div className="youtube--videos grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
          {ytdata.length &&
            ytdata.map((video) => {
              if (video.channel) return;
              return (
                <div
                  className="block w-full"
                  key={video.video.title + video.video.videoId}
                >
                  <a
                    className="block"
                    href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={video.video?.thumbnails[0]?.url}
                      alt={video.video.title}
                      width={280}
                      height={280}
                      className="aspect-[360/202] w-full rounded-md border-4  border-red-500 object-cover"
                    />
                    <h1 className="mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
                      {video.video.title}
                    </h1>
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
