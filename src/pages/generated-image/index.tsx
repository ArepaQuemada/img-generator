import { requestAdapter } from "@/adapters/generated-image/request-adapter";
import { ImageGenController } from "@/controllers/img-gen.controller";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";

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
  return (
    <main className="p-1">
      <h1 className="text-4xl font-bold">Generated Image</h1>
      <div className="py-6">
        <Image src={url} alt="generated-image" width={width} height={height} />
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Download Image
          </button>
        </div>
      </div>
    </main>
  );
}
