import { Form } from "@/components/Form/Form";
import { Hero } from "@/components/Hero/Hero";
import { FormValues } from "@/types/form-values";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleSubmit = (formValues: FormValues) => {
    const { prompt, option } = formValues;
    router.push(`/generated-image?prompt=${prompt}&option=${option}`);
  };
  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Hero />
          <Form handleSubmit={handleSubmit} />
        </div>
      </div>
    </main>
  );
}
