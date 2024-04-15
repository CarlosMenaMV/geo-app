import { Comment } from "@/app/interfaces/get-features.interface";

const FeatureComments = ({ comments }: { comments: Comment[] }) => {
  return (
    <div className="mb-4">
      {comments.length ? (
        comments.map((comment, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
            <p className="">{comment.text}</p>
            <p className="text-gray-500 text-sm">
              {new Date(comment.created_at).toLocaleString()}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-600">0 comments :(</p>
      )}
    </div>
  );
};

export default FeatureComments;
