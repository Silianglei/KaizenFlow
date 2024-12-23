import React from 'react';

interface TermsCheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function TermsCheckbox({ checked, onChange, error }: TermsCheckboxProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <div className="flex items-center h-5 mt-1">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={checked}
            onChange={onChange}
            className="h-4 w-4 rounded border-brand-gray/20 bg-brand-gray/10 text-brand-primary focus:ring-brand-primary/50"
          />
        </div>
        <label htmlFor="terms" className="text-sm text-brand-light">
          I agree to the{' '}
          <a href="https://www.gokaizenflow.com/terms" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          {' '}and{' '}
          <a href="https://www.gokaizenflow.com/privacy" className="text-brand-primary hover:underline" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </label>
      </div>
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}