import { useEffect, useState } from "react";

import { IFrame } from "../types/series";
import { backend } from "../helper/backend";

export const useCheckout = (frameId: string) => {
  const [frame, setFrame] = useState<IFrame>();

  useEffect(() => {
    (async () => {
      const res = await backend
        .get(`/frames/${frameId}`)
        .catch((error) => console.log(error));

      if (res) setFrame(res.data);
    })();
  }, []);

  const defaultForm = {
    name: "",
    email: "",
    message: "",
  };

  console.log(defaultForm);
  const [form, setForm] = useState<{
    name: string;
    email: string;
    message: string;
  }>(defaultForm);

  const [error, setError] = useState<string>("");

  const checkout = async () => {
    console.log(form);
    if (form.email === "" || form.name === "" || form.message === "") {
      setError("Form not filled");
      return;
    }

    const regex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

    if (!regex.test(form.email)) {
      setError("Email not valid.");
      return;
    }

    const res = await backend
      .post("/stripe/checkout", { form: form, frame: frame })
      .catch((error) => console.log(error));

    if (res) {
      if (res.data.status === "Success") {
        setForm(defaultForm);
        setError(res.data.message);
      } else if (res.data.status === "Error") {
        setError(res.data.message);
      }
    }
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, email: event.target.value });
  };
  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, name: event.target.value });
  };
  const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({ ...form, message: event.target.value });
  };

  const onChange = {
    email: onEmailChange,
    name: onNameChange,
    message: onMessageChange,
  };

  return { form, checkout, error, onChange };
};
