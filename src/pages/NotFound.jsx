import { Link } from "react-router-dom";
import img from "../assets/404.svg";
import LazyImage from "../components/LazyImage";
import { useEffect } from "react";
import { MetaTags } from "../utils/MetaTags";
import notFoundImage from "../assets/og-not-found.png";
export default function NotFound() {
  return (
    <section>
      <MetaTags title={"not found | MuscleLap"} img={notFoundImage} />
      <div className="absolute left-0 top-0 h-14 w-full bg-gray-800 md:h-[88px]"></div>
      <section className="flex min-h-[--min-height] items-center justify-center ">
        <div>
          <LazyImage src={img} alt="404 page not found" className="size-96" />
          <h1 className="my-1 text-center text-lg font-bold text-blue-500">
            page not found !
          </h1>
          <Link
            to={"/"}
            className="mt-3 block text-center text-lg font-medium duration-300 hover:tracking-wider hover:underline"
          >
            &larr; nav back to homepage
          </Link>
        </div>
      </section>
    </section>
  );
}
