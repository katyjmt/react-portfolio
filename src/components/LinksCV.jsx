import '../styles/LinksCV.css'
import linkedinImg from '../assets/linkedin.png'
import githubImg from '../assets/github-black.png'

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
        <div className='cv-button contact-button'>
          <a href="https://drive.google.com/file/d/1WgVxRquRuRMjoWbix4alsv8Mnc1CwU9v/view" target='_blank' rel="noreferrer">Download CV</a>
        </div>
      </div>
    </>
  )
}