import '../../styles/Intro.css'
import Katy from '../../assets/katy-profile.png'

export default function Home() {
  return (
    <>
      <div className="keywords centered">
        <span className="keyword-words">Full-Stack Development</span>
        <span className="keyword-words">|</span>
        <span className="keyword-words">UX / UI Design</span>
        <span className="keyword-words">|</span>
        <span className="keyword-words">Analytics</span>
      </div>
      <div className="page-title">Katy Thompson</div>
      <div className="intro-container">
        <p className="intro">
          Hi, I&apos;m Katy! I&apos;ve been working in the tech industry for just over 7
          years, wearing multiple hats as a digital
          producer, front-end developer, UX consultant, designer, strategist,
          data analyst and account manager.
          <br />
          <br />
          I love creating beautiful and useful things, and get deep satisfaction
          out of learning how things work from first principles. Over
          the years I&apos;ve done self-driven deep-dives into coding,
          SQL, typeface design, book binding, sewing and pattern making, how to
          fit-out a camper van, and lots of other creative and analytical
          pursuits. I recently completed a 6-month full-stack coding bootcamp at Monash University, graduating with a 94% average.
          <br />
          <br />
          Over my professional life, I&apos;ve collaborated closely with
          talented teams of developers, designers and producers on website and
          microsite projects for renowned brands including Sydney Symphony Orchestra, PTW Architects,
          Bega, Mars, Warner Music, and more. The projects
          I&apos;ve worked on and the people I&apos;ve worked with have taught
          me a lot about what good design is. How to create things that are not
          just aesthetically delightful, but that are designed around a deep
          understanding of the user and their needs.
          <br />
          <br />
          This website is a place for me to document my personal projects and
          explorations. Thanks for visiting!
        </p>
        <img className="katy-image" src={Katy} alt="Photo of Katy" />
      </div>
    </>
  );
}
