import personalData from "../personalData/personalData";
import type { WorkStructure } from "../types";

const { name, firstSurname } = personalData;

const work: WorkStructure = {
  title: "My Work",
  description: `Learn about ${name} ${firstSurname}'s most recent projects`,
  tagline:
    "See my most recent projects below to get an idea of my past experience.",
};

export default work;
