import React from 'react';
import { useSignInForm } from './useSignInForm';
import FormInput from '../Signup/FormInput';
import SocialSignIn from '../Signup/SocialSignIn';

export default function SignInForm() {
  const { formData, errors, handleChange, handleSubmit } = useSignInForm();

  return (
    <div className="max-w-md mx-auto w-full">
      <h2 className="text-3xl font-bold text-white mb-2">
        Welcome Back
      </h2>
      <p className="text-brand-light mb-8">
        Sign in to your account to continue
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          autoFocus
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="h-4 w-4 rounded border-brand-gray/20 bg-brand-gray/10 text-brand-primary focus:ring-brand-primary/50"
            />
            <label htmlFor="remember" className="ml-2 text-sm text-brand-light">
              Remember me
            </label>
          </div>
          <a href="/forgot-password" className="text-sm text-brand-primary hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-dark font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Sign In
        </button>
      </form>

      <div className="mt-8 flex flex-col items-center gap-4">
        <p className="text-brand-light">
          Don't have an account?{' '}
          <a href="/signup" className="text-brand-primary hover:underline">
            Sign up
          </a>
        </p>
        <SocialSignIn />
      </div>
    </div>
  );
}