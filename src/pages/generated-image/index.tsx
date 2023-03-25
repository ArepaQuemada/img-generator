import { GetServerSidePropsContext } from "next";

export function getServerSideProps({ query }: GetServerSidePropsContext) {
  console.log(query);
  return {
    props: {
      prompt: query.prompt,
    },
  };
}

interface Props {
  prompt: string;
  url: string;
}

export default function GeneratedImage({ prompt, url }: Props) {
  return (
    <main>
      Generated Image
      <p>{prompt}</p>
    </main>
  );
}
