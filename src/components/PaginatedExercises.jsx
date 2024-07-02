import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import Skeleton from "./Skeleton";

export default function PaginatedExercises({ exercises }) {
  const limit = 20;
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  function updateExercises() {
    let filtered = [];
    filtered = exercises?.slice(page * limit, (page + 1) * limit);
    setData(filtered);
  }
  useEffect(() => {
    updateExercises();
  }, [page, limit, exercises]);
  if (data.length < 1) {
    return (
      <div className="mx-auto max-w-screen-2xl px-4 py-12">
        <h1 className="px-16 py-12 text-center text-xl font-extrabold text-gray-700 underline decoration-gray-700 underline-offset-8 md:text-left md:text-3xl">
          All Exercises
        </h1>
        <Skeleton>
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton.New key={i + "skeleton-loading" + i} />
          ))}
        </Skeleton>
      </div>
    );
  }
  return (
    <>
      <div className="exercises--wrapper mx-auto mb-20 max-w-screen-2xl px-5 lg:px-[90px]">
        <h1 className="px-16 py-12 text-center text-xl font-extrabold text-gray-700 underline decoration-gray-700 underline-offset-8 md:text-left md:text-3xl ">
          All Exercises
        </h1>

        <Card data={data} />
      </div>
      <Pagination
        setPage={setPage}
        count={Math.floor(exercises?.length / limit) - 1}
      />
    </>
  );
}
