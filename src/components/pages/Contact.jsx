import Form from '../Form';
import LinksCV from '../LinksCV';
import '../../styles/Contact.css'

export default function Contact() {
  return (
    <>
      <div className="page-title">Contact & CV</div>
      <div className='underline'></div>
      <div className='contact-page'>
      <Form />
      <LinksCV />
      </div>
    </>
  )
}