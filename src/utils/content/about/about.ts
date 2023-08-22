import type { AboutStructure } from "../types";
import personalData from "../personalData/personalData";

const { name, firstSurname } = personalData;

const about: AboutStructure = {
  title: "About",
  tagline:
    "Passionate about web development, committed to teamwork, and always striving for improvement.",
  description: `Discover the personal journey and background of ${name} ${firstSurname}`,
  aboutMe: `I am a <span class="keyword">web development</span> enthusiast with a strong commitment to <span class="keyword">collaboration</span> and <span class="keyword">creative problem-solving</span>. My focus on <span class="keyword">teamwork</span> and <span class="keyword">empathy</span> creates a positive and productive environment. I always crave <span class="keyword">learning</span> and <span class="keyword">adapting</span> to new situations, enabling me to tackle challenges with <span class="keyword">enthusiasm</span> and find <span class="keyword">effective solutions</span>. I am dedicated to my <span class="keyword">professional growth</span> and bringing value to <span class="keyword">exciting projects</span>.`,

  educationList: [
    "- Basic general education (<span>EGB</span>)",
    "- Compulsory Secondary Education (<span>ESO</span>)",
    `- Full Stack Web Development Bootcamp (<a href="/education-training/" >ISDICoders</a>)`,
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
      competency: "Resilience",
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
      competency: "Testing",
    },
    {
      competency: "JavaScript",
    },
    {
      competency: "TypeScript",
    },
    {
      competency: "React",
    },
    {
      competency: "Redux",
    },
    {
      competency: "Node.js",
    },
    {
      competency: "Sass",
    },
    {
      competency: "Styled Components",
    },
    {
      competency: "React Router Dom",
    },
    {
      competency: "Axios",
    },
    {
      competency: "Express",
    },
    {
      competency: "MongoDB",
    },
    {
      competency: "Git",
    },
    {
      competency: "GitHub Actions",
    },
  ],
};

export default about;
