import { ImgTransformController } from "@/controllers/img-transform.controller";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.body;
  const generatedImg = await new ImgTransformController(url).transform();

  res.setHeader("Content-Type", "image/png");
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="generated-image.png"'
  );
  res.send(generatedImg);
}
