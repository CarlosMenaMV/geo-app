import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  page: number;
  onPageChange: (value: number) => void;
  label: string;
}

const PaginationButton = ({ page, onPageChange, label }: Props) => {
  return (
    <button
      className={`w-10 mx-2 px-4 py-2 ${
        page ? "text-purple-600 hover:bg-purple-100" : "text-gray-300"
      } bg-white rounded-full shadow`}
      onClick={() => onPageChange(page)}
      disabled={!page}
      aria-label={label}
    >
      <FontAwesomeIcon icon={label === "next" ? faCaretRight : faCaretLeft} />
    </button>
  );
};

export default PaginationButton;
