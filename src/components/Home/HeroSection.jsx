export default function HeroSection({ scrollToStart }) {
  return (
    <section className="min-h-screen">
      <div className="wrapper flex h-screen w-full flex-col items-center justify-center gap-y-6 bg-[url('/src/assets/template.webp')] bg-cover bg-center bg-no-repeat px-4 pt-24  text-white">
        <h1 className=" font-anton text-xl uppercase md:text-2xl lg:text-3xl">
          Keep Your Body
        </h1>
        <span className="font-anton text-7xl uppercase md:text-8xl lg:text-9xl">
          burning
        </span>
        <p className="max-w-[420px] text-center text-sm md:text-base">
          At Muscle Lap, we're dedicated to helping you reach your full
          potential to maximize your muscle growth and power.
        </p>
        <button
          className="better-gradient mb-32 h-14 w-40 rounded-md bg-blue-600 font-medium duration-300 hover:bg-blue-700"
          onClick={scrollToStart}
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
