import { useState, useEffect } from "react";
import { GetPopulerPostResponse } from "../service/PopulerPostService";

export interface PopulerPostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PopulerPostOutputType {
  loading: boolean;
  populerPost: Array<PopulerPostType>;
}

export const usePopulerPost = (): PopulerPostOutputType => {
  const [populerPost, setPopulerPost] = useState<Array<PopulerPostType>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const post = await GetPopulerPostResponse();
      setPopulerPost(post);
      setLoading(false);
    })();
  }, []);
  return {
    populerPost,
    loading,
  };
};
