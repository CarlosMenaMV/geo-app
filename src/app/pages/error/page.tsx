"use client";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";

const FeatureNotFound = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl my-4 text-purple-600 font-bold">
        Feature Not Found
      </h1>
      <FontAwesomeIcon size="6x" className="text-purple-600" icon={faSadCry} />
      <p className="mt-4 text-lg text-gray-700">
        We could not find the feature you were looking for.
      </p>
      <button
        onClick={handleGoHome}
        className="mt-6 px-4 py-2 text-purple-500 hover:text-purple-700 font-semibold border border-purple-500 hover:border-purple-700 rounded"
      >
        Return to Home
      </button>
    </div>
  );
};

export default FeatureNotFound;
