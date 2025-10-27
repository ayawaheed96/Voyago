import { useEffect, useMemo, useCallback } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "lucide-react";

type Props = {
  totalItems: number;
  pageSize?: number;
  currentPage?: number;
  setPage: (page: number) => void;
  className?: string;
};

function Pagination({
  totalItems,
  pageSize = 4,
  currentPage: defaultPage = 1,
  setPage,
  className,
}: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const urlPage = parseInt(searchParams.get("page") || "");
  const pagesNum = Math.ceil(totalItems / pageSize);
  const currentPage =
    urlPage && urlPage > 0 && urlPage <= pagesNum ? urlPage : defaultPage;

  useEffect(() => {
    if (currentPage !== defaultPage) {
      setPage(currentPage);
    }
  }, [currentPage, defaultPage, setPage]);

  const pageNumbers = useMemo(() => {
    const pages = [];
    if (pagesNum <= 5) {
      for (let i = 1; i <= pagesNum; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", pagesNum);
      } else if (currentPage >= pagesNum - 2) {
        pages.push(
          1,
          "...",
          pagesNum - 3,
          pagesNum - 2,
          pagesNum - 1,
          pagesNum
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          pagesNum
        );
      }
    }
    return pages;
  }, [currentPage, pagesNum]);

  const handlePageClick = useCallback(
    (page: any) => {
      if (page === "..." || page === currentPage) return;

      const newSearchParams = new URLSearchParams(location.search);
      newSearchParams.set("page", page.toString());

      navigate(`${location.pathname}?${newSearchParams.toString()}`);
      setPage(page);
    },
    [location.pathname, location.search, navigate, setPage, currentPage]
  );

  const paginationButtons = useMemo(() => {
    return pageNumbers.map((page, index) =>
      page === "..." ? (
        <span key={`ellipsis-${index}`}>...</span>
      ) : (
        <Button
          className="px-4 "
          key={`page-${page}`}
          variant={currentPage !== page ? "ghost" : "default"}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </Button>
      )
    );
  }, [pageNumbers, currentPage, handlePageClick]);

  if (!totalItems || totalItems <= pageSize) return null;

  return (
    <div
      className={
        "gap-4s float-end flex w-full items-center justify-end text-gray-400" +
        className
      }
    >
      <div className="flex items-center gap-2 mr-8 my-8">
        <Button
          disabled={currentPage === 1}
          className="px-2"
          variant="ghost"
          onClick={() => handlePageClick(currentPage - 1)}
        >
          <ArrowRightIcon className="rotate-180 rtl:rotate-0" />
          Previous
        </Button>
        <div className="flex gap-2">{paginationButtons}</div>
        <Button
          variant="ghost"
          disabled={currentPage === pagesNum}
          className="px-2 disabled:cursor-not-allowed"
          onClick={() => handlePageClick(currentPage + 1)}
        >
          Next
          <ArrowRightIcon className="rtl:rotate-180" />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
