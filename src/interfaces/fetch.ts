import { Header } from "next/dist/lib/load-custom-routes";

export interface FetchProps<T = any> {
  url: string;
  method: string;
  headers?: RequestInit["headers"] | undefined;
  body?: T;
}
