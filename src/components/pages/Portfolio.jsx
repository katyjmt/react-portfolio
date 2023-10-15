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
          width: "30%",
          height: "220px",
          backgroundImage: `url(${project.imageRef})`,
          backgroundSize: "cover",
          backgroundRepeat: "none",
          backgroundPosition: "center",
          border: "2px solid black",
          borderRadius: "5px",
          margin: "15px 15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div
          className="portfolio-title"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "8px 10px",
            width: "100%",
            position: "relative",
          }}
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
