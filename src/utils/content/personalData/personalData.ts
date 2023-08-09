import type { PersonalDataStructure } from "../types";

export const personalData: PersonalDataStructure = {
  name: "Rubén",
  firstSurname: "Ramírez",
  secondSurname: "Martínez",
  tagline:
    "I am a Creative Developer who is currently based in Barcelona, Spain.",
  profileImage: "/images/profileImage.webp",
  altProfileImage: () =>
    `${personalData.name} ${personalData.firstSurname} smiling and wearing a brown sweater`,
};

export default personalData;
