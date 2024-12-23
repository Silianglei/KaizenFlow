import { useEffect, useState } from 'react';

interface LocationState {
  state?: {
    formData?: {
      firstName: string;
      lastName: string;
      email: string;
    };
  };
}

export function useLocation() {
  const [location, setLocation] = useState<LocationState>({ state: undefined });

  useEffect(() => {
    // Get state from sessionStorage on mount
    const state = sessionStorage.getItem('formData');
    if (state) {
      setLocation({ state: { formData: JSON.parse(state) } });
      // Clean up after retrieving
      sessionStorage.removeItem('formData');
    }
  }, []);

  return location;
}