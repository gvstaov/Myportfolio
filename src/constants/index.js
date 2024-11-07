import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus, nunc quis consequat aliquet, massa ipsum interdum ligula, et ultricies purus turpis non leo. Mauris maximus justo eget scelerisque viverra. Suspendisse potenti. Sed ullamcorper neque et eros semper, ac egestas turpis luctus. Nam vitae luctus nunc. Integer lectus augue, tempus ac nisl nec, facilisis vehicula leo. Praesent pulvinar et lectus et rutrum. Morbi non mi ut lectus venenatis ullamcorper non a libero. Donec in elementum magna. Vestibulum rutrum urna sed sodales consequat.`;

export const ABOUT_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus, nunc quis consequat aliquet, massa ipsum interdum ligula, et ultricies purus turpis non leo. Mauris maximus justo eget scelerisque viverra. Suspendisse potenti. Sed ullamcorper neque et eros semper, ac egestas turpis luctus. Nam vitae luctus nunc. Integer lectus augue, tempus ac nisl nec, facilisis vehicula leo. Praesent pulvinar et lectus et rutrum. Morbi non mi ut lectus venenatis ullamcorper non a libero. Donec in elementum magna. Vestibulum rutrum urna sed sodales consequat.`;

export const EXPERIENCES = [
  {
    year: "08/2024 - Atualmente",
    role: "Assistente de T.I",
    company: "Credvalor",
    description: `Realizo suporte aos usuários visando garantir eficiência na operação. Também produzo automações e participo ativamente da digitalização da empresa, além da implementação e exportação do banco de dados em nuvem via Azure.`,
    technologies: ["Javascript", ".NET", "C#", "MySQL", "Python", "Azure"],
  },
];

export const PROJECTS = [
  {
    title: "Winterfell",
    image: project1,
    description:
      "Participei no desenvolvimento do banco de dados de um servidor privado, auxiliei na implementação e atualização do mesmo.",
    technologies: ["MySQL", "Python"],
  },
  {
    title: "Fast Burguer",
    image: project2,
    description:
      "Site para servir como cardápio digital e realizar compras rápidas.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
  {
    title: "Meu Portfólio",
    image: project3,
    description:
      "Meu portfólio pessoal, feito para reforçar meu aprendizado e exibir meu trabalho.",
    technologies: ["Javascript", "CSS", "React", "Tailwind"],
  },
  {
    title: "MedConnect",
    image: project4,
    description:
      "Plataforma para realização de consultas médicas, além do cadastro de médicos e pacientes.",
    technologies: ["HTML", "CSS", "Python", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Minas Gerais - Brasil ",
  phoneNo: "+55 (34) 98407-9202 ",
  email: "gustavoavlis@icloud.com",
};
