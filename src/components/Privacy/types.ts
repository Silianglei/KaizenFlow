export interface Subsection {
  title: string;
  content: string | React.ReactNode;
}

export interface PrivacySection {
  id: string;
  title: string;
  content: string | React.ReactNode;
  subsections?: Subsection[];
}