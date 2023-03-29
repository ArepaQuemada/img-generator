import { ImgDownloader } from "@/infraestructure/img-downloader";

export class ImgDownloadController {
  private imgDownloader: ImgDownloader;

  constructor(blob: Blob) {
    this.imgDownloader = new ImgDownloader(blob);
  }

  download() {
    this.imgDownloader.download();
  }
}
