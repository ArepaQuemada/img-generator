import { ImgTransform } from "@/infraestructure/img-transform";

export class ImgTransformController {
  private imgTransform: ImgTransform;

  constructor(url: string) {
    this.imgTransform = new ImgTransform(url);
  }

  async transform() {
    const buffer = await this.imgTransform.toBuffer();
    const generatedImg = await this.imgTransform.transform(buffer);
    return generatedImg;
  }
}
