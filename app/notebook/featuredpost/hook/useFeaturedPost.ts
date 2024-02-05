import { useState, useEffect } from "react";
import { getFeaturedResponse } from "./../service/FeaturedPostService";

export interface FeaturedPostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface FeaturedPostOutputType {
  loading: boolean;
  featuredPost: Array<FeaturedPostType>;
}

export const useFeaturedPost = () => {
  const [featuredPost, setFeaturedPost] = useState<Array<FeaturedPostType>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const featuredRes = await getFeaturedResponse();
      setLoading(false);
      setFeaturedPost(featuredRes);
    })();
  }, []);

  return { loading, featuredPost };
};
