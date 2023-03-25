import { FormValues } from "@/types/form-values";

export const isValidForm = (formValues: FormValues) => {
  return Object.values(formValues).every((value) => value !== "");
};
