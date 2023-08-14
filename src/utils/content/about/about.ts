import type { AboutStructure } from "../types";
import personalData from "../personalData/personalData";

const { name, firstSurname } = personalData;

const about: AboutStructure = {
  title: "About",
  tagline:
    "Thanks for stopping by. Read below to learn more about myself and my background.",
  description: `Discover the personal journey and background of ${name} ${firstSurname}`,
  aboutMeList: [
    `From an early age, my <span>passion for technology</span> led me to explore different ways of expressing my <span>creativity</span>, which led me to create projects on platforms like Twitch and <a href="https://www.youtube.com/channel/UCQp8FVb1lPhVEKlQv273y_Q" target="_blank">YouTube</a>. Although I'm not currently dedicated to it, that experience provided me with <span>valuable communication and creativity skills</span> that are transferable to my career as a developer.`,

    `It was during this exploration that I discovered <span>programming</span> as a unique opportunity to combine my love for technology with a <span>rewarding career</span>. Realizing that I could turn my passion into my profession brought me deep satisfaction and increased motivation in my daily life.`,

    `Along my journey in programming, I decided to seize a unique opportunity and completed one of the top <span>programming bootcamps</span> in Europe. This enriching experience provided me with a solid foundation of <span>practical knowledge</span>, and since then, I have been continuously seeking opportunities to further grow and refine my <span>skills</span>.`,

    `I love facing challenges and <span>constantly learning</span> in the field of programming. I am <span>passionate about continuous learning</span> and always seek opportunities to enhance my <span>skills and knowledge</span>. Additionally, my ability to <span>quickly grasp new concepts</span> allows me to adapt to new technologies and approaches with ease.`,

    `Since I was young, I have been an <span>untiring worker</span> and I put maximum effort into every project I get involved in. I don't rest until I achieve my <span>goals</span> and find creative solutions to overcome any obstacles that may arise.`,

    `In my work environment, I have a profound respect for my colleagues and superiors, firmly believing that <span>collaboration</span>, <span>respect</span>, and <span>empathy</span> are essential to create a positive and productive working atmosphere.`,

    `I am excited to continue growing as a <span>professional in the field of programming</span> and take on new challenges. My <span>determination</span> and <span>passion for learning</span> drive me to acquire new skills and knowledge to contribute to the success of each project I participate in.`,
  ],
  backgroundList: [
    `During my previous work experience, I developed <span>valuable skills in problem-solving and communication</span> while working in the construction industry as an assembler and welder. This experience allowed me to develop a perfectionist approach and an unwavering work ethic, traits that I now apply in my career as a developer.`,

    `The <span>ability to work in a team and value collaboration</span> was also an essential part of my past work, and I understand the importance of effective communication to achieve common goals in software development projects.`,

    `Furthermore, my previous experience taught me the importance of <span>organization and planning</span>, fundamental skills to approach projects in a structured and efficient manner in the field of programming.`,

    `<span>Adaptability</span> and the ability to learn quickly, acquired through my journey across various work areas, allow me to stay updated with the latest technologies and approaches in web development and apply them in my current projects.`,

    `I am excited about the combination of my previous skills and my passion for technology, and I look forward to contributing with <span>dedication, enthusiasm, and creativity</span> to challenging projects in my future as a developer.`,
  ],
  educationList: [
    "- Basic general education (<span>EGB</span>)",
    "- Compulsory Secondary Education (<span>ESO</span>)",
    `- Full Stack Web Development Bootcamp (<a href="https://isdicoders.com/" target="_blank">ISDICoders</a>)`,
  ],
  softSkills: [
    {
      competency: "Effective Communication",
    },
    {
      competency: "Teamwork",
    },
    {
      competency: "Problem-Solving",
    },
    {
      competency: "Adaptability",
    },
    {
      competency: "Continuous Learning",
    },
    {
      competency: "Organization and Planning",
    },
    {
      competency: "Collaboration",
    },
    {
      competency: "Empathy",
    },
    {
      competency: "Work Ethic",
    },
    {
      competency: "Creativity",
    },
    {
      competency: "Responsibility",
    },
    {
      competency: "Determination",
    },
  ],
  hardSkills: [
    {
      competency: "Full Stack Development",
    },
    {
      competency: "JavaScript",
    },
    {
      competency: "TypeScript",
    },
    {
      competency: "Astro",
    },
    {
      competency: "React",
    },
    {
      competency: "React Router Dom",
    },
    {
      competency: "Redux",
    },
    {
      competency: "Axios",
    },
    {
      competency: "Node.js",
    },

    {
      competency: "Express",
    },
    {
      competency: "MongoDB",
    },
    {
      competency: "Mongoose",
    },
    {
      competency: "Dotenv",
    },
    {
      competency: "JSON Web Token",
    },
    {
      competency: "Bcryptjs",
    },
    {
      competency: "JWT Decode",
    },
    {
      competency: "Join",
    },
    {
      competency: "Sass",
    },
    {
      competency: "Styled Components",
    },
    {
      competency: "Jest",
    },
    {
      competency: "Vitest",
    },
    {
      competency: "Supertest",
    },
    {
      competency: "React Testing Library",
    },
    {
      competency: "MSW (Mock Service Worker)",
    },
    {
      competency: "Git",
    },
    {
      competency: "Workflows",
    },
    {
      competency: "Fishery",
    },
    {
      competency: "ESLint",
    },
    {
      competency: "Prettier",
    },
    {
      competency: "Husky",
    },
    {
      competency: "Commitlint",
    },
    {
      competency: "WordPack",
    },
    {
      competency: "Vite",
    },
  ],
};

export default about;
