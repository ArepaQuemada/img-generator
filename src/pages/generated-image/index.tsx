import { requestAdapter } from "@/adapters/generated-image/request-adapter";
import { ImageGenController } from "@/controllers/img-gen.controller";
import { ImgTransformController } from "@/controllers/img-transform.controller";
import { useDownloadImage } from "@/hook/useDonwloadImage";
import { downloadImage } from "@/utilities/download-image";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
/**
 * SHOW PLACEHOLDER WHILE IMAGE IS LOADING
 */
export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { prompt, size } = requestAdapter(query);
  const controller = new ImageGenController({
    prompt,
    size,
  });

  const response = await controller.generateImg();
  return {
    props: {
      url: response,
      width: 512,
      height: 512,
    },
  };
}

interface Props {
  url: string;
  width: number;
  height: number;
}

export default function GeneratedImage({ url, height, width }: Props) {
  const { onClickDownload, isDownloading } = useDownloadImage(url);
  return (
    <main className="p-1">
      <h1 className="text-4xl font-bold">Generated Image</h1>
      <div className="py-6">
        <Image src={url} alt="generated-image" width={width} height={height} />
        <div className="form-control mt-6">
          <button
            type="button"
            className={`btn btn-primary ${isDownloading && "loading"}`}
            onClick={onClickDownload}
          >
            Download Image
          </button>
        </div>
      </div>
    </main>
  );
}
