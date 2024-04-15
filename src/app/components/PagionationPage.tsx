interface Props {
  page: number;
  onPageChange: (value: number) => void;
}

const PaginationPage = ({ page, onPageChange }: Props) => {
  return (
    <button
      className="w-10 justify-center flex mx-2 px-4 py-2 text-purple-600 bg-white rounded-md hover:bg-purple-100 shadow"
      onClick={() => onPageChange(page)}
    >
      {page}
    </button>
  );
};

export default PaginationPage;
