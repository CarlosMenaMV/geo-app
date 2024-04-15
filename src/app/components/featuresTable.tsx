import { Feature } from "@/app/interfaces/get-features.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faFaceSadTear,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FeatureColumn } from "./featuresColumn";
import { FeatureRow } from "./featuresRow";
import { useRouter } from "next/navigation";

interface Props {
  features: Feature[];
}

export const FeaturesTables = ({ features }: Props) => {
  const router = useRouter();
  if (!features || features.length === 0) {
    return (
      <div className="text-center">
        <FontAwesomeIcon size="6x" color="purple" icon={faFaceSadTear} />
      </div>
    );
  }

  const handleSeeClick = (id: string) => {
    router.push(`pages/feature/${id}`);
  };

  return (
    <div className="flex flex-col items-center my-8">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-purple-600 text-white">
            <tr>
              <FeatureColumn name={"ID"} />
              <FeatureColumn name={"Magnitude"} />
              <FeatureColumn name={"Place"} />
              <FeatureColumn name={"Date"} />
              <FeatureColumn name={"Magnitude Type"} />
              <FeatureColumn name={"Latitude"} />
              <FeatureColumn name={"Longitude"} />
              <FeatureColumn name={"URL"} />
              <FeatureColumn name={"Detail"} />
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {features.map((feature, index) => (
              <tr
                className={`border-b ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
                key={feature.id}
              >
                <FeatureRow value={feature.id.toString()} />
                <FeatureRow value={feature.attributes.magnitude} />
                <FeatureRow value={feature.attributes.place} />
                <FeatureRow value={feature.attributes.time} isDate={true} />
                <FeatureRow value={feature.attributes.mag_type} />
                <FeatureRow value={feature.attributes.coordinates.latitude} />
                <FeatureRow value={feature.attributes.coordinates.longitude} />
                <td className="px-4 py-3">
                  <a
                    href={feature.links.external_url}
                    className="text-purple-600 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </td>
                <td className="px-4 py-3">
                  <button
                    className="text-purple-600 hover:text-purple-900"
                    onClick={() => handleSeeClick(feature.id.toString())}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
