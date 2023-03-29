import { FetchProps } from "@/interfaces/fetch";

export class Fetcher<T> {
  url: string;
  method: string;
  headers?: RequestInit["headers"];
  body?: T;

  constructor({ url, method, headers, body }: FetchProps<T>) {
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.body = body;
  }

  async fetch() {
    const response = await fetch(this.url, {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
    });
    return response;
  }

  async toBlob(response: Response) {
    const blob = await response.blob();
    return blob;
  }
}
