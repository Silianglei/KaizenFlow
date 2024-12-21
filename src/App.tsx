import React, { useState } from 'react';
import OpeningAnimation from './components/OpeningAnimation/OpeningAnimation';
import PageContent from './components/PageContent';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';

export default function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const path = window.location.pathname;
  const isPrivacyPage = path === '/privacy';
  const isTermsPage = path === '/terms';

  return (
    <>
      {showAnimation && !isPrivacyPage && !isTermsPage && (
        <OpeningAnimation onComplete={() => setShowAnimation(false)} />
      )}
      {isPrivacyPage ? (
        <Privacy />
      ) : isTermsPage ? (
        <Terms />
      ) : (
        <PageContent isVisible={!showAnimation} />
      )}
    </>
  );
}