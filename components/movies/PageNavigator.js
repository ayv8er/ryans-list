export default function PageNavigator({
  pageIndex,
  totalNumberPages,
  pageNumber,
  setPageNumber,
}) {
  if (pageIndex.length === 0) {
    return <div>You have no favorites</div>;
  }
  return (
    <ul className="flex justify-around w-full sm:w-3/4 my-1 border-t py-2">
      <li
        className={
          pageNumber === 1
            ? "hidden sm:inline-block text-red-600"
            : "hidden sm:inline-block cursor-pointer text-green-600"
        }
        onClick={() => {
          if (pageNumber === 1) {
            return;
          }
          setPageNumber(pageNumber - 1);
        }}
      >
        Prev
      </li>
      {pageIndex.map((page, index) => {
        return (
          <li
            className={
              page === pageNumber ? "border-b cursor-pointer" : "cursor-pointer"
            }
            onClick={() => setPageNumber(page)}
            key={index}
          >
            {page}
          </li>
        );
      })}
      <li
        className={
          pageNumber === totalNumberPages
            ? "hidden sm:inline-block text-red-600"
            : "hidden sm:inline-block cursor-pointer text-green-600"
        }
        onClick={() => {
          if (pageNumber === totalNumberPages) {
            return;
          }
          setPageNumber(pageNumber + 1);
        }}
      >
        Next
      </li>
    </ul>
  );
}
