const Skeleton = ({ children }) => {
  return (
    <div className="mx-auto max-w-screen-2xl overflow-hidden px-5 lg:px-[90px]">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </div>
  );
};
Skeleton.New = () => {
  const skeletonAnimation = `
  bg-gray-300 animate-pulse rounded-md
  `;
  return (
    <article>
      <div className="wrapper h-[378.8px] w-full space-y-8 rounded-xl border-[3px] border-neutral-300 p-4">
        <div
          className={`skeleton-image mx-auto h-[200px] w-9/12 ${skeletonAnimation}`}
        />
        <div
          className={`skeleton-title mx-auto h-12 w-9/12 ${skeletonAnimation}`}
        />
        <div className="flex justify-start gap-4 sm:justify-center">
          <div className={`skeleton-title h-8 w-20 ${skeletonAnimation}`} />
          <div className={`skeleton-title h-8 w-20 ${skeletonAnimation}`} />
          <div className={`skeleton-title h-8 w-20 ${skeletonAnimation}`} />
        </div>
      </div>
    </article>
  );
};

export default Skeleton;
