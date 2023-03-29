import FileSaver from "file-saver";

export class ImgDownloader {
  private blob: Blob;
  constructor(blob: Blob) {
    this.blob = blob;
  }

  download() {
    FileSaver.saveAs(this.blob, "generated-image.jpg");
  }
}
