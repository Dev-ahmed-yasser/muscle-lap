import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Card({ data }) {
  const colors = [
    "bg-rose-600",
    "bg-indigo-600",
    "bg-emerald-600",
    "bg-cyan-600",
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {data?.map((item) => (
        <Link to={`/exercises/${item.id}`} key={item.id} className="exercise">
          <div className="wrapper rounded-xl border-[3px] border-neutral-300 p-4">
            <span className="flex items-center justify-center">
              <LazyLoadImage
                src={item.gifUrl}
                width={230}
                height={200}
                alt={item.name}
                className="object-cover mix-blend-darken"
              />
            </span>
            <p className="mt-4 text-center text-2xl font-semibold capitalize">
              {item.name.split(" ").slice(0, 2).join(" ")}
            </p>
            <p className="my-4 flex flex-wrap gap-2">
              {item.secondaryMuscles.map((item, i) => {
                if (i >= 2) return;
                return (
                  <span
                    key={item + i}
                    className={` ${colors[i]} better-gradient rounded-full px-4 py-2 text-xs font-medium text-white`}
                  >
                    {item}
                  </span>
                );
              })}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
