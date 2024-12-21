import { TermsSection } from './types';
import { userSections } from './sections/userSections';
import { paymentSections } from './sections/paymentSections';
import { legalSections } from './sections/legalSections';
import { serviceSections } from './sections/serviceSections';
import { contactSections } from './sections/contactSections';

export const sections: TermsSection[] = [
  {
    id: 'our-services',
    title: 'OUR SERVICES',
    content: `The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.`
  },
  {
    id: 'intellectual-property-rights',
    title: 'INTELLECTUAL PROPERTY RIGHTS',
    content: `We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").`
  },
  ...userSections,
  ...paymentSections,
  ...serviceSections,
  ...legalSections,
  ...contactSections
];