import React, { useState } from "react";
import { Col, Row} from "react-materialize";
import Mail from "../components/Mail";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Contact() {
    const[subject, setSub]=useState('')
    const[message, setMessage]=useState('')

   const handleInput=(e)=>{
        let name=e.target.name;
        if(name==='subject'){
            setSub(e.target.value)
        }
        else if(name==='message'){
            setMessage(e.target.value)
        }
    }
  return (
    <div>
      <div className="container">
        <Row>
          <Col s={12} m={8} l={6}offset="m2 l3">
            
                <form>
                    <label>Subject:</label>
                    <input id='subject' name='subject' type='text' onChange={handleInput} value={subject}></input>
                    <br/>
                    <label>Message:</label>
                    <textarea id='message' name='message' onChange={handleInput} value={message}></textarea>
                    {/* <Button id='mail' className='mailto' href="mailto:chenry5724@gmail.com">Send</Button> */}
                    <Mail label="Send E-Mail" mailto={`mailto:chenry5724@gmail.com?subject=${subject}&body=${message}`}/>
                    <hr/>
                    <Row id="iconR">
                        <Col s={4} offset='s2'>
                        <FontAwesomeIcon id='bIcons' icon={faGithub} />
                        </Col>
                        <Col s={4} offset='s2'>
                        <FontAwesomeIcon id='bIcons' icon={faLinkedin} />
                        </Col>
                    </Row>
                </form>
            
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Contact;
