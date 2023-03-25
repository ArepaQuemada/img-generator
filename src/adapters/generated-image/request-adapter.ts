import { SIZES } from "@/enums/sizes.enum";
import { ParsedUrlQuery } from "querystring";

export const requestAdapter = (query: ParsedUrlQuery) => {
  const { prompt, size } = query;
  if (!prompt || !size) {
    throw new Error("Missing parameters");
  }

  return {
    prompt: `${prompt}`,
    size: SIZES[size as keyof typeof SIZES],
  };
};
