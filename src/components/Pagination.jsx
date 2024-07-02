import ReactPaginate from "react-paginate";
export default function Pagination({ setPage, count = 0 }) {
  function handlePageChange(e) {
    const page = e.selected + 1;
    setPage(page);
  }
  return (
    <div>
      <ReactPaginate
        className="flex select-none items-center justify-center  gap-3 bg-gray-800/90 py-3 text-xl text-white"
        pageCount={count}
        previousClassName="text-stone-200 text-2xl font-bold size-12 leading-[48px] text-center"
        nextClassName="text-stone-200 text-2xl font-bold size-12 leading-[48px] text-center"
        nextLabel={">"}
        previousLabel={"<"}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        activeClassName={"active bg-slate-200 !text-slate-800 !font-bold"}
        pageClassName="text-stone-200 font-medium rounded-full size-12 leading-[48px] text-center tabular-nums"
        onPageChange={handlePageChange}
      />
    </div>
  );
}
