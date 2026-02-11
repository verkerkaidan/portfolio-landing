export interface ExperienceItemProps {
  title: string;
  period: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
  accentColor: string;
}

export interface CertificationCardProps {
  title: string;
  description: string;
  logoSrc: string;
  logoAlt: string;
}

export interface HobbyCardProps {
  title: string;
  description: string;
}

export interface SlideshowProps {
  images: string[];
}
