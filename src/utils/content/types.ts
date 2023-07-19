import type { IconPathsProps } from "../icons/IconPaths";

export type PersonalDataStructure = {
  name: string;
  firstSurname: string;
  secondSurname: string;
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
