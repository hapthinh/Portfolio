import awgImg from "../assets/images/awg.png";
import portfolioImg from "../assets/images/portfolio.png";
import novoImg from "../assets/images/novo.png";

export const projects = [
  {
    title: "Portfolio Website",
    image: portfolioImg,
    description: "Personal portfolio website built with React and SCSS.",
    tags: ["React", "SCSS", "Responsive"],
    liveUrl: "https://hapthinh.github.io/Portfolio/",
    repoUrl: "https://github.com/hapthinh/Portfolio",
  },
  {
    title: "Ecommerce Website",
    image: awgImg,
    description:
      "A modern ecommerce website with product browsing and UI interactions.",
    tags: ["React", "Wordpress", "Shopify"],
    liveUrl: "https://www.classicwire.com/",
    repoUrl: "#",
  },
  {
    title: "Dashboard App",
    image: novoImg,
    description: "Admin dashboard with charts, tables and authentication flow.",
    tags: ["React", "Chart", "Auth"],
    liveUrl: "#",
    repoUrl: "#",
  },
];
