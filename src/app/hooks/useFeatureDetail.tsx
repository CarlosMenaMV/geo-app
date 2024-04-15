"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { config } from "../config/config";
import { Feature } from "../interfaces/get-features.interface";

const useFeatureDetail = (id: string) => {
  const [feature, setFeature] = useState<Feature>(null);
  const router = useRouter();

  const handleBackIndex = () => {
    router.push("/");
  };

  const handleAddCommentClick = () => {
    router.push(`/pages/comments/${id}`);
  };

  useEffect(() => {
    if (id) {
      const fetchFeatureDetails = async () => {
        const response = await fetch(`${config.GEO_API_URL}/features/${id}`);
        const data = await response.json();
        if (data.error) {
          router.push("/pages/error");
        } else {
          setFeature(data);
        }
      };

      fetchFeatureDetails();
    }
  }, [id]);

  return {
    feature,
    handleAddCommentClick,
    handleBackIndex,
  };
};

export default useFeatureDetail;
