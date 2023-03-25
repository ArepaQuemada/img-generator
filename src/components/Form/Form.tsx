import { FormValues } from "@/types/form-values";
import { isValidForm } from "@/utilities/valid-form";
import { useState } from "react";

interface Props {
  handleSubmit: (formValues: FormValues) => void;
}

export function Form({ handleSubmit }: Props) {
  const [formValues, setFormValues] = useState<FormValues>({
    prompt: "",
    option: "small",
  });

  const isButtonDisabled = !isValidForm(formValues);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSubmit(formValues);
  }

  return (
    <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={onSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detailed description</span>
          </label>
          <input
            type="text"
            placeholder="Generate a dinosaur on a bike"
            className="input input-bordered"
            name="prompt"
            value={formValues.prompt}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image size</span>
          </label>
          <div className="btn-group">
            <input
              type="radio"
              name="option"
              data-title="Small"
              className="btn"
              onChange={handleChange}
              checked={formValues.option === "small"}
              value="small"
            />
            <input
              type="radio"
              name="option"
              data-title="Medium"
              className="btn"
              onChange={handleChange}
              checked={formValues.option === "medium"}
              value="medium"
            />
            <input
              type="radio"
              name="option"
              data-title="Large"
              className="btn"
              checked={formValues.option === "large"}
              onChange={handleChange}
              value="large"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isButtonDisabled}
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
}
