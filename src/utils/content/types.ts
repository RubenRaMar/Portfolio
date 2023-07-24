import type { IconPathsProps } from "../icons/IconPaths";

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

export type RolesStructure = {
  role: string;
  icon: keyof IconPathsProps;
};
