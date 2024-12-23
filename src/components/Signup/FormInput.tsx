import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
}

export default function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required,
  autoFocus,
  placeholder
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-white mb-1.5">
        {label} {required && <span className="text-brand-primary">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        autoFocus={autoFocus}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 bg-brand-gray/10 border rounded-lg text-white placeholder:text-brand-light focus:outline-none focus:ring-1 transition-colors ${
          error 
            ? 'border-red-400 focus:border-red-400 focus:ring-red-400/50' 
            : 'border-brand-gray/20 focus:border-brand-primary/50 focus:ring-brand-primary/50'
        }`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}