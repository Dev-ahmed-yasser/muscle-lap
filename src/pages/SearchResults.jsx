import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import ogImage from "../assets/search.png";
import { MetaTags } from "../utils/MetaTags";

export default function SearchResults() {
  const searchTerm = useParams().searchkey;
  const [searchResults, setSearchResults] = useState([]);
  
  const nav = useNavigate();
  useEffect(() => {
    (async function () {
      const { data } = await useFetch(
        `https://exercisedb.p.rapidapi.com/exercises/name/${searchTerm}`,
      );
      if (!data) nav("/error");
      setSearchResults(data);
    })();
  }, [searchTerm]);
  if (searchResults.length < 1) {
    return (
      <div className="mt-20 md:mt-32">
        <MetaTags img={ogImage} title={searchTerm + " | MuscleLap"} />
        <div className="wrapper min-h-[--min-height]">
          <div className="absolute left-0 top-0 h-14 w-full bg-gray-800 md:h-[88px]"></div>
          <h1 className="mb-6 text-center text-xl font-bold text-gray-800 md:text-4xl">
            Search Results
          </h1>
          <h1 className="text-center text-xl font-medium text-gray-800 md:text-2xl">
            No Results to Show
          </h1>
        </div>
      </div>
    );
  }
  return (
    <section className=" overflow-hidden">
      <MetaTags img={ogImage} title={searchTerm + " | MuscleLap"} />
      <div className="absolute top-0 h-24 w-full bg-gray-800"></div>
      <h1 className="mb-20 mt-32 px-6 text-center text-xl font-bold text-gray-800 md:px-20 md:text-4xl">
        Search Results for <span className="text-red-600">{searchTerm}</span>
      </h1>
      <section className="my-20 min-h-[--not-found-min-height] px-5 lg:px-[90px]">
        <Card data={searchResults} />
      </section>
    </section>
  );
}
