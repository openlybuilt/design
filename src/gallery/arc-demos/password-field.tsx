import { PasswordField } from "@/vendor/arc/password-field/password-field";

export function SignInPassword() {
  return (
    <PasswordField
      label="Password *"
      name="password"
      autoComplete="current-password"
      required
    />
  );
}
