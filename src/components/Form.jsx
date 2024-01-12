import { useEffect, useState } from 'react';
import '../styles/Form.css'; // Assuming you have your CSS styles here

const Form = () => {
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');

    // Function to dynamically load the Mailchimp script
    const loadMailchimpScript = () => {
        const script = document.createElement('script');
        script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
        script.type = 'text/javascript';
        document.body.appendChild(script);

        script.onload = () => {
            if (window.fnames && window.ftypes) {
                window.fnames = new Array(); 
                window.ftypes = new Array();
                window.fnames[0]='EMAIL'; 
                window.ftypes[0]='email';
                window.fnames[8]='QUESTION'; 
                window.ftypes[8]='text';
                // Add other field names and types as needed
            }
        };
    };

    useEffect(() => {
        loadMailchimpScript();
    }, []);

    return (
        <div id="mc_embed_signup">
            <form action="https://studio.us7.list-manage.com/subscribe/post?u=530bb71b1d0a23d64f7231ec9&amp;id=46297f0f74&amp;f_id=00a9e4e4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                <div id="mc_embed_signup_scroll">
                    <p>Have a question? Get in contact via the form below.</p>
                    <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                      <input 
                          type="email" 
                          name="EMAIL" 
                          className="required email" 
                          id="mce-EMAIL" 
                          required 
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-QUESTION">Your Question <span className="asterisk">*</span></label>
                      <input 
                          type="text" 
                          name="QUESTION" 
                          className="required text" 
                          id="mce-QUESTION" 
                          required 
                          value={question}
                          onChange={e => setQuestion(e.target.value)}
                      />
                    </div>
                    <div id="mce-responses" className="clear foot">
                        <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                        <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                        <input type="text" name="b_530bb71b1d0a23d64f7231ec9_46297f0f74" tabIndex="-1" value="" />
                    </div>
                    <div className="optionalParent">
                        <div className="clear foot">
                            <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                            <p style={{ margin: '0px auto' }}>
                                <a href="http://eepurl.com/iHTj8k" title="Mailchimp - email marketing made easy and fun">
                                    <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                                        <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }} />
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;


// export default function Form() {
//   return(
//     <>
//       <div className='contact-form'>
//       <p>Have a question? Get in contact via the form below.</p>
//         <form data-netlify="true" name="contact" netlify-honeypot="bot-field">
//           <input type="hidden" name="bot-field" />
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" id="form-name" required/>
//           <label htmlFor="email">Email:</label>
//           <input type="email" name="email" id="form-email"/>
//           <label htmlFor="message">Question:</label>
//           <textarea name="message" id="message" cols="30" rows="8"></textarea>
//           <input type="submit" value="SUBMIT" />
//         </form>
//       </div>
//     </>
//   )
// }