import personalData from "../personalData/personalData";
import type { IsdiCodersStructure } from "../types";

const { name, firstSurname, secondSurname } = personalData;

const isdiCoders: IsdiCodersStructure = {
  title: "Education and Training",
  description: `Information about ${name} ${firstSurname}'s education and training`,
  tagline: "Explore my educational and training journey in this section.",
  figuranisPresentation: [
    {
      name: `${name} ${firstSurname} ${secondSurname}`,
      tagline: "Full Stack Wep Developer",
      src: "https://www.youtube.com/embed/k2I1kwzHFfw",
      image: "ruben.jpg",
      linkedin: {
        href: "https://www.linkedin.com/in/rubenramar/",
        username: "rubenramar",
      },
    },
  ],
  teachersFeedback: [
    {
      name: "Mario González Lendínez",
      tagline: "Lead Instructor at ISDI Coders",
      src: "https://www.youtube.com/embed/xgyhbx6ne7E",
      image: "mario.jpg",
      linkedin: {
        href: "https://www.linkedin.com/in/mariogl/",
        username: "mariogl",
      },
    },
    {
      name: "Lorena Martínez Moledo",
      tagline: "Learning Experience Specialist at ISDI Coders",
      src: "https://www.youtube.com/embed/-pphF6Jj4zI",
      image: "lorena.jpg",
      linkedin: {
        href: "https://www.linkedin.com/in/lorenamartinezmoledo/",
        username: "lorenamartinezmoledo",
      },
    },
    {
      name: "Diego Bermúdez",
      tagline: "Assistent teacher at ISDI Coders",
      src: "https://www.youtube.com/embed/rCboNqo4sYY",
      image: "diego.jpg",
      linkedin: {
        href: "https://www.linkedin.com/in/diegofbermudez/",
        username: "diegofbermudez",
      },
    },
  ],
};

export default isdiCoders;
