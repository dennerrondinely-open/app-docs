export const ALLOWED_DOMAIN = 'open-co.com';

export function isEmailAllowed(email: string | null | undefined): boolean {
  if (!email) return false;
  return email.endsWith(`@${ALLOWED_DOMAIN}`);
}

export function getEmailErrorMessage(): string {
  return `Apenas emails do domínio @${ALLOWED_DOMAIN} são permitidos`;
}
