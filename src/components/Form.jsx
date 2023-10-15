import '../styles/Form.css'

export default function Form() {
  return(
    <>
      <div className='contact-form'>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="form-name" required/>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="form-email"/>
          <label htmlFor="message">Question:</label>
          <textarea name="message" id="message" cols="30" rows="8"></textarea>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
    </>
  )
}