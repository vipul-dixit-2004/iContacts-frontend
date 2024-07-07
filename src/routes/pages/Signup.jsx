import SignupForm from "../../components/SignupForm";
import Success from "../../components/Success";
import authStore from "../../stores/authStore";

export default function Signup() {
  const { signUpSuccess } = authStore();
  return (
    <>
      <SignupForm />
      {signUpSuccess && <Success />}
    </>
  );
}
