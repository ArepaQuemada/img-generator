import { Form } from "@/components/Form/Form";
import { Hero } from "@/components/Hero/Hero";
import { useNavigateToGenerations } from "@/hook/useNavigateToGeneratios";
import { FormValues } from "@/types/form-values";

export default function Home() {
  const { isLoading, navigate } = useNavigateToGenerations();

  const handleSubmit = (formValues: FormValues) => {
    const { prompt, option } = formValues;
    navigate({ prompt, option });
  };

  return (
    <main>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Hero />
        <Form handleSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </main>
  );
}
