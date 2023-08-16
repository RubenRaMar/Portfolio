import type { IconPathsProps } from "../icons/types";

export type PageStructure = {
  title: string;
  tagline: string;
  description: string;
};

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

export type AboutStructure = PageStructure & {
  aboutMeList: string[];
  backgroundList: string[];
  educationList: string[];
  softSkills: CompetenciesStructure[];
  hardSkills: CompetenciesStructure[];
};

export type EducationTrainingStructure = PageStructure & {
  title: string;
  description: string;
  tagline: string;
  videoDetails: VideoDetailsStructure[];
};

export type VideoDetailsStructure = {
  name: string;
  tagline: string;
  src: string;
  image: string;
  linkedin: LinkedinStructure;
};

export type LinkedinStructure = {
  href: string;
  username: string;
};
