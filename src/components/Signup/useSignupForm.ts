import { useState } from 'react';
import { FormData, FormErrors } from './types';
import { validateEmail, validatePhoneNumber, validateUrl } from '../../utils/validation';
import { sendWebhook, WEBHOOKS } from '../../utils/webhooks';

export function useSignupForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    companyUrl: ''
  });

  const [errors, setErrors] = useState<FormErrors & { submit?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    if (!formData.companyUrl.trim()) {
      newErrors.companyUrl = 'Company website is required';
    } else if (!validateUrl(formData.companyUrl)) {
      newErrors.companyUrl = 'Please enter a valid URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await sendWebhook(WEBHOOKS.CONSULTATION, {
        type: 'consultation_request',
        timestamp: new Date().toISOString(),
        data: formData
      });

      // Store form data in sessionStorage
      sessionStorage.setItem('formData', JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email
      }));
      
      // Redirect to confirmation page
      window.location.href = '/consultation-confirmation';
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        submit: 'Unable to submit form. Please try again or contact support.'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  };
}