"use client";
import useComment from "@/app/hooks/useComment";

interface Props {
  params: {
    id: string;
  };
}

const AddComment = ({ params }: Props) => {
  const { handleSubmit, comment, setComment } = useComment(params.id);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-purple-600 mb-6">
          Create a new comment
        </h1>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
          <textarea
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="I am a nice place holder.."
            rows={4}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded hover:bg-purple-700 transition-colors"
          >
            Add new comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddComment;
