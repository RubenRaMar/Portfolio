import personalData from "../personalData/personalData";
import type { EducationTrainingStructure } from "../types";

const { name, firstSurname, secondSurname } = personalData;

const educationTraining: EducationTrainingStructure = {
  title: "Education and Training",
  description: `Information about ${name} ${firstSurname}'s education and training`,
  tagline:
    "Transformé mi pasión por la programación en conocimientos sólidos a través del ISDI Coders Bootcamp, dominando desde HTML y CSS hasta tecnologías avanzadas como React, Redux y API REST.",
  videoDetails: [
    {
      name: "Mario González Lendínez",
      tagline: "Lead Instructor",
      src: "/videos/mario.mp4",
      image: "mario.jpg",
      linkedin: {
        href: "https://www.linkedin.com/in/mariogl/",
        username: "mariogl",
      },
    },
    {
      name: "Lorena Martínez Moledo",
      tagline: "Learning Experience Specialist",
      src: "/videos/lorena.mp4",
      image: "lorena.jpg",
      linkedin: {
        href: "https://www.linkedin.com/in/lorenamartinezmoledo/",
        username: "lorenamartinezmoledo",
      },
    },
    {
      name: "Diego Bermúdez",
      tagline: "Assistent teacher",
      src: "/videos/diego.mp4",
      image: "diego.jpg",
      linkedin: {
        href: "https://www.linkedin.com/in/diegofbermudez/",
        username: "diegofbermudez",
      },
    },
    {
      name: `${name} ${firstSurname} ${secondSurname}`,
      tagline: "Student",
      src: "/videos/presentation.mp4",
      image: "ruben.jpg",
      linkedin: {
        href: "https://www.linkedin.com/in/rubenramar/",
        username: "rubenramar",
      },
    },
  ],
};

export default educationTraining;
