import { ImgDownloadController } from "@/controllers/img-download.controller";

export const downloadImage = (blob: Blob) => {
  const controller = new ImgDownloadController(blob);
  controller.download();
};
