"use client";
import FeatureComments from "@/app/components/FeatureComments";
import FeatureDetailData from "@/app/components/FeatureDetail";
import FeatureDetailButton from "@/app/components/featureDetailButton";
import useFeatureDetail from "@/app/hooks/useFeatureDetail";

interface Props {
  params: {
    id: string;
  };
}

const FeatureDetail = ({ params }: Props) => {
  const { feature, handleAddCommentClick, handleBackIndex } = useFeatureDetail(
    params.id
  );

  if (!feature) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen h-screen bg-slate-100">
      <div className="max-w-2xl mx-auto p-5 bg-slate-100">
        <h1 className="text-2xl text-purple-600 font-bold mb-4">
          Feature details
        </h1>
        <FeatureDetailData feature={feature} />

        <h1 className="text-2xl text-purple-600 font-bold mb-2">Comments</h1>

        <FeatureComments comments={feature.comments} />

        <div className="flex justify-between">
          <FeatureDetailButton label="Back" onClick={handleBackIndex} />
          <FeatureDetailButton
            label="Add Comment"
            onClick={handleAddCommentClick}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;
