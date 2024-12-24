import React from 'react';
import PageContent from './components/PageContent';
import SignupPage from './components/Signup/SignupPage';
import ConsultationConfirmation from './components/Consultation/ConsultationConfirmation';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';

export default function App() {
  const path = window.location.pathname;
  
  switch (path) {
    case '/chat':
      return <SignupPage />;
    case '/consultation-confirmation':
      return <ConsultationConfirmation />;
    case '/privacy':
      return <Privacy />;
    case '/terms':
      return <Terms />;
    default:
      return <PageContent />;
  }
}