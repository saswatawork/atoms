import { NOTEBOOK_API_PATH } from "../../config";

export const getFeaturedResponse = async () => {
  try {
    const res = await fetch(`${NOTEBOOK_API_PATH}/posts`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
