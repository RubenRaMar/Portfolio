import type { IconPathsProps } from "../icons/types";

export type PersonalDataStructure = {
  name: string;
  firstSurname: string;
  secondSurname: string;
  tagline: string;
  profileImage: string;
  altProfileImage: () => string;
};

export type SocialMediaStructure = {
  label: string;
  href: string;
  icon: keyof IconPathsProps;
};

export type NavBarLinksStructure = {
  label: string;
  href: string;
};

export type CompetenciesStructure = {
  competency: string;
  icon?: keyof IconPathsProps;
  description?: string;
};

export type AboutStructure = {
  title: string;
  tagline: string;
  aboutMeList: string[];
  backgroundList: string[];
  educationList: string[];
  softSkills: CompetenciesStructure[];
  hardSkills: CompetenciesStructure[];
};

export type WorkStructure = {
  title: string;
  description: string;
  tagline: string;
};
