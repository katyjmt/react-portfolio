import '../styles/LinksCV.css'
import linkedinImg from '../assets/linkedin.png'
import githubImg from '../assets/github.png'

export default function LinksCV() {
  return (
    <>
      <div className='links-cv-container'>
        <a href="https://www.linkedin.com/in/katy-thompson/" target="_blank" rel="noreferrer" className="contact-button">
          <img src={linkedinImg} className="icon" alt="Katy Thompson's LinkedIn" />
        </a>
        <a href="https://github.com/katyjmt/" target="_blank" rel="noreferrer" className="contact-button">
          <img src={githubImg} className="icon" alt="Katy Thompson's LinkedIn" />
        </a>
        <button className='cv-button contact-button'>Download CV</button>
      </div>
    </>
  )
}