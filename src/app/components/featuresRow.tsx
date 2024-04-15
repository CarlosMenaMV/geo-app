interface Props {
  value: string;
  isDate?: boolean;
}
export const FeatureRow = ({ value, isDate = false }: Props) => {
  const formatValue = (seconds: string) => {
    if (isDate) {
      const date = new Date(Number(seconds));
      return date.toLocaleDateString();
    }
    return seconds;
  };

  return (
    <td className="text-center px-4 py-3 border-r">{formatValue(value)}</td>
  );
};
