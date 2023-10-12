import githubImg from "../assets/github.png";
import projectData from "../data/portfolioData";
import "../styles/Portfolio.css";

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
          width='40px'
          height='40px'
        />
      </a>
    );
  }

  return (
    <>
      <div
        className="portfolio-card"
        style={{
          width: '30%',
          height: '250px',
          backgroundImage: `url(${project.imageRef})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          border: '2px solid black',
          borderRadius: '5px',
          margin: '15px 15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div className="portfolio-title"
          style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '8px 10px',
            borderRadius: '5px 5px 0px 0px',
            width: '60%',
            height: '25px',
          }}
        >{project.name}</div>
        {githubIcon} 
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
