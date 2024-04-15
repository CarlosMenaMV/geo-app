import { Feature } from "@/app/interfaces/get-features.interface";
const FeatureDetailData = ({ feature }: { feature: Feature }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <p>
        <strong>ID:</strong> {feature.id}
      </p>
      <p>
        <strong>Magnitude:</strong> {feature.attributes.magnitude}
      </p>
      <p>
        <strong>Place:</strong> {feature.attributes.place}
      </p>
      <p>
        <strong>Time:</strong>{" "}
        {new Date(Number(feature.attributes.time)).toLocaleString()}
      </p>
      <p>
        <strong>Tsunami:</strong> {feature.attributes.tsunami ? "Yes" : "No"}
      </p>
      <p>
        <strong>Type of Magnitude:</strong>{" "}
        {feature.attributes.mag_type.toUpperCase()}
      </p>
      <p>
        <strong>Title:</strong> {feature.attributes.title}
      </p>
      <div className="mt-4">
        <h2 className="text-xl text-purple-600 font-bold mb-2">Coordinates</h2>
        <p>
          <strong>Longitude:</strong> {feature.attributes.coordinates.longitude}
        </p>
        <p>
          <strong>Latitude:</strong> {feature.attributes.coordinates.latitude}
        </p>
      </div>
      {feature.links && feature.links.external_url && (
        <div className="mt-4">
          <a
            href={feature.links.external_url}
            className="text-purple-600 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Visit external link
          </a>
        </div>
      )}
    </div>
  );
};

export default FeatureDetailData;
