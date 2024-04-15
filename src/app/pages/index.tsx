"use client";
import React from "react";
import useFeature from "../hooks/useFeatures";
import FeaturesTableFilters from "@/app/components/featuresTableFilters";
import { FeaturesTables } from "@/app/components/featuresTable";
import { PaginationMenu } from "@/app/components/PaginationMenu";

export const Index = () => {
  const {
    features,
    currentPage,
    totalPages,
    handlePageChange,
    setSelectedMagTypes,
    selectedMagTypes,
    totalFeatures,
  } = useFeature();

  return (
    <div className="flex h-screen w-screen bg-slate-100 justify-center items-center flex-col">
      <h1 className="text-5xl font-semibold text-purple-700 my-4">
        Features List
      </h1>
      <FeaturesTableFilters
        setSelectedMagTypes={setSelectedMagTypes}
        selectedMagTypes={selectedMagTypes}
      />

      <h2 className="mt-2 font-semibold text-purple-600 text-center">
        Total of Features <p className="text-black">{totalFeatures}</p>
      </h2>

      <FeaturesTables features={features} />
      {totalFeatures > 0 && (
        <PaginationMenu
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};
