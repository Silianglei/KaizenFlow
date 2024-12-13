import { useState, useEffect } from 'react';

export function useAppState() {
  const [mounted, setMounted] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Start animations
    const navTimer = setTimeout(() => {
      setNavVisible(true);
      setTimeout(() => {
        setContentVisible(true);
      }, 100);
    }, 800);

    return () => {
      clearTimeout(navTimer);
    };
  }, []);

  return {
    mounted,
    navVisible,
    contentVisible
  };
}