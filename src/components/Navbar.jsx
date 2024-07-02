import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Icons";
export default function Navbar() {
  return (
    <nav className="absolute left-1/2 top-0 z-50 mx-auto flex w-full max-w-screen-2xl -translate-x-1/2 items-center justify-between gap-5 px-3 py-3 text-white md:gap-14 md:px-20 md:py-7">
      <Link className="Logo flex cursor-pointer items-end gap-3" to={"/"}>
        <Logo
          className="mirror size-8 drop-shadow-[3px_0px_dodgerblue]"
          width={28}
          height={28}
        />
        <h1 className="text-base font-bold tracking-widest md:text-lg">
          MuscleLap
        </h1>
      </Link>
      <div className="flex items-end justify-start gap-3 text-base font-medium tracking-wide md:gap-10 md:text-lg">
        {[
          { title: "Home", path: "/" },
          { title: "Exercises", path: "/exercises" },
        ].map((item, i) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? `block text-blue-400 underline decoration-blue-400 underline-offset-4 ${i == 1 && "translate-y-[1px]"}`
                : `block hover:text-blue-500 ${i == 1 && "translate-y-[1px]"}`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
