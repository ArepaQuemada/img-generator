import { Fetcher } from "@/infraestructure/fetcher";
import { FetchProps } from "@/interfaces/fetch";

export class FetchController<T> {
  fetcher: Fetcher<T>;
  constructor({ url, method, headers, body }: FetchProps<T>) {
    this.fetcher = new Fetcher<T>({ url, method, headers, body });
  }

  async fetch() {
    return this.fetcher.fetch();
  }

  async toBlob(response: Response) {
    return this.fetcher.toBlob(response);
  }
}
