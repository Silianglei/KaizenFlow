// Animation timing constants
export const TIMING = {
  LOGO_SPIN: 400,    // Logo animation duration
  LOGO_FADE: 200,    // Logo fade out duration
  NAVBAR_SLIDE: 300, // Navbar slide in duration
  CONTENT_SLIDE: 600 // Content slide up duration
} as const;

// CSS easing functions
export const EASING = {
  SMOOTH_OUT: 'cubic-bezier(0.16, 1, 0.3, 1)' // Smooth easing curve
} as const;