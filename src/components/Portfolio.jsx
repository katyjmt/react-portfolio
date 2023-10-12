import githubImg from "../assets/github.png";
import projectData from "../data/portfolioData";
import '../styles/Portfolio.css';

function PortfolioCard({ project }) {
  let githubIcon;

  if (project.github != "") {
    githubIcon = (
      <a href={project.github} className="portfolio-github-link">
        <img
          src={githubImg}
          target="_blank"
          alt={`Link to ${project.name} Github`}
          className="portfolio-github-img"
        />
      </a>
    );
  }

  return (
    <>
      <div
        className="portfolio-card"
        style={{
          backgroundImage: `url(${project.imageRef})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="portfolio-title">{project.name}</div>
        <div className="portfolio-github-icon">{githubIcon}</div>
      </div>
    </>
  );
}

function PortfolioContainer({ projects }) {
  const cards = projects.map((project) => (
    <PortfolioCard key={project.name} project={project} />
  ));

  return <div className="portfolio-container">{cards}</div>;
}

export default function Portfolio() {
  return <PortfolioContainer projects={projectData} />;
}
