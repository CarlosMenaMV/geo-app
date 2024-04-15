interface Props {
  onClick: () => void;
  label: string;
}

const FeatureDetailButton = ({ onClick, label }: Props) => {
  return (
    <button
      onClick={() => onClick()}
      className="text-white bg-purple-600 hover:bg-purple-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
    >
      {label}
    </button>
  );
};

export default FeatureDetailButton;
