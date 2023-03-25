import { CreateImageRequestSizeEnum } from "openai";

export type Payload = {
  prompt: string;
  size: CreateImageRequestSizeEnum;
};
