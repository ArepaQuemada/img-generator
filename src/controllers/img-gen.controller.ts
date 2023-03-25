import { ImgGenerator } from "@/infraestructure/img-generator";
import { Payload } from "@/types/payload";

export class ImageGenController {
  private imgGenerator: ImgGenerator;
  readonly payload: Payload;

  constructor(payload: Payload) {
    this.payload = payload;
    this.imgGenerator = new ImgGenerator(payload);
  }

  async generateImg() {
    const img = await this.imgGenerator.generate();
    return img;
  }
}
