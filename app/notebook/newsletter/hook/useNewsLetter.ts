import { ChangeEvent, useState } from "react";

export const useNewsLetter = () => {
  const [value, setValue] = useState("");

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const submitNewsletter = () => {
    if (value) {
      console.log("value", value);
    }
  };
  return {
    value,
    onHandleChange,
    submitNewsletter,
  };
};
