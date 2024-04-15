import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { config } from "../config/config";

const useComment = (id: string) => {
  const [comment, setComment] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await fetch(`${config.GEO_API_URL}/features/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: comment,
      }),
    });

    router.push(`/pages/feature/${id}`);
  };

  return {
    handleSubmit,
    setComment,
    comment,
  };
};

export default useComment;
