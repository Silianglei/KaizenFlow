interface ValidationErrors {
  email?: string;
  password?: string;
}

export function validateSignInForm(data: {
  email: string;
  password: string;
}): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!data.password) {
    errors.password = 'Password is required';
  }

  return errors;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}