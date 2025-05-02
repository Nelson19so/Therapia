import FormInput from "./FormInput";

export default function SignupForm() {
  return (
    <form
      action=""
      className="flex flex-col gap-y-[11px]"
      onSubmit={(e) => e.preventDefault()}
    >
      <FormInput type="text" placeholder="First Name" name="firstName" />
      <FormInput type="text" placeholder="Last Name" name="lastName" />
      <FormInput type="email" placeholder="Email" name="email" />
      <FormInput type="password" placeholder="Password" autoComplete="off" />
      <FormInput
        type="password"
        placeholder="Confirm Password"
        autoComplete="off"
      />
      <div className="flex items-center lg:justify-start justify-center gap-x-[5px]">
        <input
          type="checkbox"
          name=""
          id="accept-terms"
          className="sm:w-[17px] sm:h-[17px] w-[14px] h-[14px]"
        />
        <span className="sm:text-[16px]/[35px] text-[13px]/[35px] text-[var(--text-dark)]">
          I agree to all{" "}
          <span className="font-semibold">terms & conditions.</span>
        </span>
      </div>
      <button className="sm:text-[17px]/[35px] text-[14px]/[35px] text-[var(--text-light)] font-bold bg-[var(--primary)] px-[19px] py-[10px] rounded-[10px]">
        Sign up
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
  );
}
