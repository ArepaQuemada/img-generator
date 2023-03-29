import { FetchController } from "@/controllers/fetch-controller";
import { downloadImage } from "@/utilities/download-image";
import { useState } from "react";

export const useDownloadImage = (url: string) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const onClickDownload = async () => {
    setIsDownloading(true);
    try {
      const fetcher = new FetchController({
        url: "api/download-image",
        method: "POST",
        body: { url },
        headers: { "Content-Type": "application/json" },
      });

      const response = await fetcher.fetch();
      const blob = await fetcher.toBlob(response);

      downloadImage(blob);
    } catch (err) {
      console.log(err);
    } finally {
      setIsDownloading(false);
    }
  };

  return { onClickDownload, isDownloading };
};
