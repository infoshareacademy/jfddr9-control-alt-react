type FormDataType = {
  email: string;
  password: string;
};

export const getFormData = (
  e: React.FormEvent<HTMLFormElement>
): FormDataType => {
  const form = e.target as HTMLFormElement;
  const email = form.email as HTMLInputElement;
  const password = form.password as HTMLInputElement;

  const formData: FormDataType = {
    email: email.value,
    password: password.value,
  };

  return formData;
};
