import PaginationButton from "./PaginationButton";
import PaginationPage from "./PagionationPage";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export const PaginationMenu = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  const previousPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <div className="flex items-center justify-center my-4">
      <PaginationButton
        label="previous"
        page={previousPage}
        onPageChange={onPageChange}
      />

      {previousPage && (
        <PaginationPage page={previousPage} onPageChange={onPageChange} />
      )}

      <span className="w-10 justify-center flex mx-2 px-4 py-2 text-white bg-purple-600 rounded-md shadow">
        {currentPage}
      </span>

      {nextPage && (
        <PaginationPage page={nextPage} onPageChange={onPageChange} />
      )}

      <PaginationButton
        label="next"
        page={nextPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};
