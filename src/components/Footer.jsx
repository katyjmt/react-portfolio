import linkedinImg from '../assets/linkedin.png'
import githubImg from '../assets/github-black.png'

export default function Footer() {
  return (
    <>
      <p className='footer-items'>&copy; Katy Thompson 2023</p>
      <a href="https://www.linkedin.com/in/katy-thompson/" target="_blank" rel="noreferrer" className='footer-items'>
        <img src={linkedinImg} className="footer-icon" alt="Katy Thompson's LinkedIn" />
      </a>
      <a href="https://github.com/katyjmt/" target="_blank" rel="noreferrer" className='footer-items'>
        <img src={githubImg} className="footer-icon" alt="Katy Thompson's LinkedIn" />
      </a>
    </>
  )
}