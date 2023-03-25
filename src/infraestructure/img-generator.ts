import { ImgGenerable } from "@/interfaces/img-generator";
import { Payload } from "@/types/payload";
import { IaModule } from "./ia-module";

export class ImgGenerator implements ImgGenerable {
  payload: Payload;
  iaModule: IaModule;

  constructor(payload: Payload) {
    this.payload = payload;
    this.iaModule = new IaModule();
  }

  async generate() {
    const { prompt, size } = this.payload;
    const response = await this.iaModule.getModule().createImage({
      n: 1,
      prompt: prompt,
      size: size,
    });
    return response.data.data[0].url;
  }
}
