import githubImg from "../../assets/github.png";
import projectData from "../../data/portfolioData";
import "../../styles/Portfolio.css";

function PortfolioCard({ project }) {
  let githubIcon;

  if (project.github != "") {
    githubIcon = (
      <a
        href={project.github}
        className="portfolio-github-link"
        style={{ position: "absolute", right: "5px" }}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={githubImg}
          alt={`Link to ${project.name} Github`}
          className="portfolio-github-img"
          width="30px"
          height="30px"
        />
      </a>
    );
  }

  return (
    <>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="portfolio-card"
        style={{
          backgroundImage: `url(${project.imageRef})`,
        }}
      >
        <div
          className="portfolio-title"
        >
          <a href={project.link} target="_blank" rel="noreferrer">
            {project.name}
          </a>
          {githubIcon}
        </div>
      </a>
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
  return (
    <>
      <div className="page-title">Portfolio</div>
      <div className="underline"></div>
      <PortfolioContainer projects={projectData} />
    </>
  );
}
