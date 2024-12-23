import React from 'react';
import { ArrowRight } from 'lucide-react';
import FormInput from './FormInput';
import { useSignupForm } from './useSignupForm';

export default function SignupForm() {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } = useSignupForm();

  return (
    <div className="bg-brand-gray/5 border border-brand-gray/10 rounded-2xl p-8 backdrop-blur-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Book Your Free Design Call</h2>
        <p className="text-brand-light mt-2">
          Let's discuss your custom AI phone system
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
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
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <FormInput
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
          required
        />

        <FormInput
          label="Company Name"
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
          placeholder="https://company.com"
          required
        />

        {errors.submit && (
          <p className="text-red-400 text-sm">{errors.submit}</p>
        )}

        <div className="space-y-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-brand-dark font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Scheduling...' : 'Schedule Free 45-Min Consultation'}
            <ArrowRight className="w-5 h-5" />
          </button>

          <div className="text-center">
            <p className="text-brand-primary font-medium">
              Trusted by 100+ Businesses
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}