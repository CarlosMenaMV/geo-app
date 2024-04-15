interface Props {
  name: string;
}
export const FeatureColumn = ({ name }: Props) => {
  return <th className="px-4 py-2">{name}</th>;
};
