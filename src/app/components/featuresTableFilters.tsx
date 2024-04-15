import { Dispatch, SetStateAction } from "react";

const magTypes = ["md", "ml", "ms", "mw", "me", "mi", "mb", "mlg"];

interface Props {
  selectedMagTypes: string[];
  setSelectedMagTypes: Dispatch<SetStateAction<string[]>>;
}

const FeaturesTableFilters = ({
  selectedMagTypes,
  setSelectedMagTypes,
}: Props) => {
  const handleMagTypeChange = (e) => {
    const value = e.target.value;
    setSelectedMagTypes(
      e.target.checked
        ? [...selectedMagTypes, value]
        : selectedMagTypes.filter((type) => type !== value)
    );
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {magTypes.map((type) => (
          <label key={type} className="inline-flex items-center mt-3">
            <span className="mx-2 text-gray-700">{type.toUpperCase()}</span>
            <input
              type="checkbox"
              value={type}
              checked={selectedMagTypes.includes(type)}
              onChange={handleMagTypeChange}
              className="mr-2 p-2 rounded border-purple-200 shadow-sm focus:border-purple-300 focus:ring focus:ring-offset-0 focus:ring-purple-500 focus:ring-opacity-50"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default FeaturesTableFilters;
