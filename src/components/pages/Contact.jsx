import Form from '../Form';
import LinksCV from '../LinksCV';

export default function Contact() {
  return (
    <>
      <div className="page-title">Contact & CV</div>
      <div className='underline'></div>
      <p>Have a question? Get in contact via the form below.</p>
      <div className='contact-page'>
      <Form />
      <LinksCV />
      </div>
    </>
  )
}