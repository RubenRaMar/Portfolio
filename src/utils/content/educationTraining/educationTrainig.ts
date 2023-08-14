import personalData from "../personalData/personalData";
import type { EducationTrainingStructure } from "../types";

const { name, firstSurname, secondSurname } = personalData;

const educationTraining: EducationTrainingStructure = {
  title: "Education and Training",
  description: `Information about ${name} ${firstSurname}'s education and training`,
  tagline: "Explore my educational and training journey in this section.",
  videoDetails: [
    {
      name: "Mario González Lendínez",
      tagline: "Lead Instructor | Bootcamp Fullstack Developer in ISDI Coders",
      src: "/video/mario.mp4",
      image: "mario.jpg",
      linkedin: {
        href: "https://www.linkedin.com/in/mariogl/",
        username: "mariogl",
      },
    },
    {
      name: "Lorena Martínez Moledo",
      tagline:
        "Learning Experience Specialist | Bootcamp Fullstack Developer in ISDI Coders",
      src: "/video/lorena.mp4",
      image: "lorena.jpg",
      linkedin: {
        href: "https://www.linkedin.com/in/lorenamartinezmoledo/",
        username: "lorenamartinezmoledo",
      },
    },
    {
      name: "Diego Bermúdez",
      tagline:
        "Assistent teacher | Bootcamp Fullstack Developer in ISDI Coders",
      src: "/video/diego.mp4",
      image: "diego.jpg",
      linkedin: {
        href: "https://www.linkedin.com/in/diegofbermudez/",
        username: "diegofbermudez",
      },
    },
    {
      name: `${name} ${firstSurname} ${secondSurname}`,
      tagline: "Student | Bootcamp Fullstack Developer in ISDI Coders",
      src: "/video/presentation.mp4",
      image: "ruben.jpg",
      linkedin: {
        href: "https://www.linkedin.com/in/rubenramar/",
        username: "rubenramar",
      },
    },
  ],
};

export default educationTraining;
