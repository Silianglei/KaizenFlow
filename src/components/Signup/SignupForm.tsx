import React from 'react';
import { ArrowRight } from 'lucide-react';
import FormInput from './FormInput';
import { useSignupForm } from './useSignupForm';

export default function SignupForm() {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useSignupForm();

  return (
    <div className="bg-brand-gray/5 border border-brand-gray/10 rounded-xl p-8 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            required
            autoFocus
          />
          <FormInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            required
          />
        </div>

        <FormInput
          label="Work Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <FormInput
          label="Phone"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
          required
        />

        <FormInput
          label="Company"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          error={errors.companyName}
          required
        />

        <FormInput
          label="Company Website"
          name="companyUrl"
          type="url"
          value={formData.companyUrl}
          onChange={handleChange}
          error={errors.companyUrl}
          placeholder="https://"
          required
        />

        {errors.submit && (
          <p className="text-red-400 text-sm">{errors.submit}</p>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-dark font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Scheduling...' : 'Schedule Your Free Build'}
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-center text-sm text-brand-light/70 mt-4">
            20-minute consultation • Pay only when it's live
          </p>
        </div>
      </form>
    </div>
  );
}