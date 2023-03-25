import { Payload } from "../types/payload";

export interface ImgGenerable {
  generate(): Promise<string | undefined>;
  payload: Payload;
}
