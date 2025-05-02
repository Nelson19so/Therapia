import { useState } from "react";
import FormInput from "./FormInput";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [inputError, setInputError] = useState({
    email: "",
    password: "",
  });
  return (
    <form
      action=""
      className="flex flex-col gap-y-[11px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <FormInput
        type="text"
        placeholder="Email"
        name="email"
        formData={formData}
        setFormData={setFormData}
        inputError={inputError}
      />
      <FormInput
        type="password"
        placeholder="Password"
        autoComplete="off"
        formData={formData}
        setFormData={setFormData}
        inputError={inputError}
      />
      <button className="sm:text-[17px]/[35px] text-[14px]/[35px] text-[var(--text-light)] font-bold bg-[var(--primary)] px-[19px] py-[10px] rounded-[10px]">
        Login
      </button>
      <div className="text-center">
        <span className="sm:text-[14px]/[35px] text-[13px]/[35px] text-[var(--text-dark)]">
          Don't have an account?{" "}
          <a href="/signup" className="font-semibold">
            Create account
          </a>
        </span>
      </div>
    </form>
  );
}
