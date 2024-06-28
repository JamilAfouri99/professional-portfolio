import five from "../assets/svg/projects/five.svg";
import four from "../assets/svg/projects/four.svg";
import seven from "../assets/svg/projects/seven.svg";
import { ProjectDataType } from "../types/data-type";
// import eight from "../assets/svg/projects/eight.svg";
// import one from "../assets/svg/projects/one.svg";
// import six from "../assets/svg/projects/six.svg";
import three from "../assets/svg/projects/three.svg";
// import two from "../assets/svg/projects/two.svg";

export const projectsData: ProjectDataType[] = [
  {
    id: 0,
    projectName: "GTUPE",
    projectDesc:
      "This project is a platform funded by the ILO, designed to fully digitize the process of creating contracts for workers in Jordan's private education sector, ensuring speed and security.",
    tags: ["Next.js", "Redux", "Typescript", "NestJS"],
    code: "https://gtupe.org/",
    demo: "https://gtupe.org/",
    image: three,
  },
  {
    id: 1,
    projectName: "Smart Restaurant",
    projectDesc:
      "The smart restaurant app is created with a focus on user experience. It incorporates various features such as enhanced functionality, authentication, lazy loading, captivating animations, and a responsive design.",
    tags: ["React", "Redux", "CSS Animation", "Firebase"],
    code: "https://github.com/JamilAfouri99/Smart-Restaurant",
    demo: "https://smart-restaurant-2c2d9.web.app/home",
    image: five,
  },
  {
    id: 2,
    projectName: "E-Commerce",
    projectDesc:
      "The e-commerce app offers seamless shopping with personalized recommendations, efficient search, order tracking, and a user-friendly interface.",
    tags: ["React","NodeJS", "Express", "MongoDB"],
    code: "https://github.com/JamilAfouri99/E-COMMERCE-APP",
    demo: "https://github.com/JamilAfouri99/E-COMMERCE-APP",
    image: seven,
  },
  {
    id: 3,
    projectName: "Simple Portfolio",
    projectDesc: "The portfolio project showcases my work, skills, and achievements, providing a comprehensive overview of my capabilities.",
    tags: ["React", "Firebase"],
    code: "https://github.com/JamilAfouri99/Portfolio",
    demo: "https://portfolio-9ec35.web.app/home",
    image: four,
  },
];
