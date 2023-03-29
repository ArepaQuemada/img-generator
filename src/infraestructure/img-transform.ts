import fetch from "node-fetch";
import sharp from "sharp";

export class ImgTransform {
  private url: string;
  constructor(url: string) {
    this.url = url;
  }

  async toBuffer() {
    const response = await fetch(this.url);
    const buffer = await response.arrayBuffer();
    return buffer;
  }

  async transform(buffer: ArrayBuffer) {
    const generatedImage = await sharp(buffer).toBuffer();
    return generatedImage;
  }
}
