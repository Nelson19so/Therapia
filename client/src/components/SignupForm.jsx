import { useState, useContext } from "react";
import FormInput from "./FormInput";
import { registerUser } from "../lib/functions";
import { AuthContext } from "../context/AuthContext";
import clsx from "clsx";

export default function SignupForm() {
  // Generate random phone number
  const randomPhoneNumber = Math.floor(Math.random() * 1e11);

  const { setAccessToken, loading, setLoading } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerErrorMessage, setRegisterErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    phone_number: "+" + randomPhoneNumber,
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
    terms_accepted: false,
  });

  const [inputError, setInputError] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirm_password: "",
  });

  function handleCheckboxChange(e) {
    setFormData({ ...formData, terms_accepted: e.target.checked });
  }

  async function handleFormSumbit() {
    const newErrors = { ...inputError };
    setRegisterSuccess(false);
    setRegisterError(false);
    setRegisterErrorMessage("");

    // Check First Name
    if (formData.first_name.length === 0) {
      newErrors.first_name = "Name field required";
    } else if (formData.first_name.length < 2) {
      newErrors.first_name = "Name must be at least 2 characters";
    } else if (!/^[a-z]*$/i.test(formData.first_name)) {
      newErrors.first_name = "Only letters A-Z allowed";
    } else {
      newErrors.first_name = "";
    }

    // Check Last Name
    if (formData.last_name.length === 0) {
      newErrors.last_name = "Name field required";
    } else if (formData.last_name.length < 2) {
      newErrors.last_name = "Name must be at least 2 characters";
    } else if (!/^[a-z]*$/i.test(formData.last_name)) {
      newErrors.last_name = "Only letters A-Z allowed";
    } else {
      newErrors.last_name = "";
    }

    // Check Email
    if (formData.email.length === 0) {
      newErrors.email = "Email field required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    } else {
      newErrors.email = "";
    }

    // Check Password
    if (formData.password.length === 0) {
      newErrors.password = "Password fields required";
    }
    if (formData.confirm_password.length === 0) {
      newErrors.confirm_password = "Password fields required";
    }
    if (formData.password.length > 0 && formData.confirm_password.length > 0) {
      if (
        formData.password.length < 8 ||
        formData.confirm_password.length < 8
      ) {
        newErrors.password = "Passwords must be at least 8 characters";
        newErrors.confirm_password = "Passwords must be at least 8 characters";
      } else if (
        !/^(?!.*(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|1234|2345|3456|4567|5678|6789|7890|8901|0123)).+$/.test(
          formData.password
        ) ||
        !/^(?!.*(?:abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|1234|2345|3456|4567|5678|6789|7890|8901|0123)).+$/.test(
          formData.confirm_password
        )
      ) {
        newErrors.password = "Weak Password";
        newErrors.confirm_password = "Weak Password";
      } else if (formData.password !== formData.confirm_password) {
        newErrors.password = "Passwords must match";
        newErrors.confirm_password = "Passwords must match";
      } else {
        newErrors.password = "";
        newErrors.confirm_password = "";
      }
    }
    setInputError(newErrors);

    let allErrors = "";
    for (let error in newErrors) {
      allErrors += newErrors[error];
    }

    if (!allErrors) {
      setLoading(true);
      const response = await registerUser(formData);
      setLoading(false);

      if (response.success) {
        setRegisterSuccess(true);
        setAccessToken(response.tokens.access);
      } else {
        setRegisterErrorMessage(response.error.email);
        setRegisterError(true);
      }
    }
  }

  return (
    <>
      {registerSuccess ? (
        <div className="text-center mb-[11px] px-[19px] py-[10px] rounded-[10px] bg-[#4285F4] text-[var(--text-light)]">
          <span>Your registration was successful</span>
        </div>
      ) : null}
      {registerError ? (
        <div className="text-center mb-[11px] px-[19px] py-[10px] rounded-[10px] bg-[#F55942] text-[var(--text-light)]">
          <span>{registerErrorMessage}</span>
        </div>
      ) : null}
      <form
        action=""
        className="flex flex-col gap-y-[11px]"
        onSubmit={(e) => e.preventDefault()}
      >
        <FormInput
          type="text"
          placeholder="First Name"
          name="firstName"
          formData={formData}
          setFormData={setFormData}
          inputError={inputError}
        />
        <FormInput
          type="text"
          placeholder="Last Name"
          name="lastName"
          formData={formData}
          setFormData={setFormData}
          inputError={inputError}
        />
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
        <FormInput
          type="password"
          placeholder="Confirm Password"
          autoComplete="off"
          formData={formData}
          setFormData={setFormData}
          inputError={inputError}
        />
        <div className="flex items-center lg:justify-start justify-center gap-x-[5px]">
          <input
            type="checkbox"
            name=""
            id="accept-terms"
            checked={formData.terms_accepted}
            onChange={handleCheckboxChange}
            className="sm:w-[17px] sm:h-[17px] w-[14px] h-[14px] cursor-pointer"
          />
          <span className="sm:text-[16px]/[35px] text-[13px]/[35px] text-[var(--text-dark)]">
            I agree to all{" "}
            <span className="font-semibold">terms & conditions.</span>
          </span>
        </div>
        <button
          onClick={formData.terms_accepted ? handleFormSumbit : null}
          className={clsx(
            "sm:text-[17px]/[35px] text-[14px]/[35px] text-[var(--text-light)] font-bold px-[19px] py-[10px] rounded-[10px] outline-0",
            { "bg-[var(--neutral-light)]": !formData.terms_accepted },
            { "bg-[var(--primary)] cursor-pointer": formData.terms_accepted }
          )}
        >
          {loading ? (
            <div className="w-full h-[35px] flex items-center justify-center">
              <div className="loader"></div>
            </div>
          ) : (
            "Sign up"
          )}
        </button>
        <div className="text-center">
          <span className="sm:text-[14px]/[35px] text-[13px]/[35px] text-[var(--text-dark)]">
            Already have an account?{" "}
            <a href="/login" className="font-semibold">
              Login
            </a>
          </span>
        </div>
      </form>
    </>
  );
}
