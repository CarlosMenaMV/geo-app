import { useEffect, useState } from "react";
import { config } from "../config/config";
import { Feature } from "../interfaces/get-features.interface";

const useFeature = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalFeatures, setTotalFeatures] = useState(1);
  const [selectedMagTypes, setSelectedMagTypes] = useState<string[]>([]);
  const totalPages = Math.ceil(totalFeatures / config.GEO_API_LIST_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        let filters =
          selectedMagTypes.length > 0
            ? `mag_type[]=${selectedMagTypes.join("&mag_type[]=")}`
            : "";
        const response = await fetch(
          `${config.GEO_API_URL}/features?page=${currentPage}&per_page=${config.GEO_API_LIST_PER_PAGE}&${filters}`
        );
        const data = await response.json();
        setFeatures(data.data);
        setTotalFeatures(data.pagination.total);
      } catch (error) {
        console.error("Error getting data", error);
      }
    };
    fetchFeatures();
  }, [currentPage, selectedMagTypes]);

  return {
    features,
    currentPage,
    totalFeatures,
    totalPages,
    handlePageChange,
    selectedMagTypes,
    setSelectedMagTypes,
  };
};

export default useFeature;
