import React, { useState } from "react";
import { Card, Col, Row } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import drip from '../images/drip.jpg'
import pensive from '../images/pensive.jpg'
function Home() {
    const [img, setImg]=useState(drip)
    const [pText, setP]= useState('I love a good challenge and am passioniate about learning. My best skill is arguably my creative ability to problem solve. Currently, I am working as a Teaching Assistant in the Full-Stack Coding Bootcamp at UT Austin. There I assit in instructing a variety of adult learners in learning modern Full Stack Web Development, particularily the M.E.R.N stack')

    const handleClick=()=>{
        if(img === pensive){
            setP('I love a good challenge and am passioniate about learning. My best skill is arguably my creative ability to problem solve. Currently, I am working as a Teaching Assistant in the Full-Stack Coding Bootcamp at UT Austin. There I assit in instructing a variety of adult learners in learning modern Full Stack Web Development, particularily the M.E.R.N stack')
            setImg(drip)
        }else{
            fetch('http://quotes.stormconsultancy.co.uk/random.json').then(response => response.json()).then(data => setP(data))
            // setP('Hello World')
            setImg(pensive)
        }
    }
  return (
    <div className="container">
      <Row>
        <Col s={12} m={8} offset="m2">
          <Card id="about">
            <Row>
              <Col s={8} m={6} offset="s2 m3" className='imgbg'>
                <img
                  id="avatar"
                  src={img}
                  alt=""
                  className="circle responsive-img"
                  onClick={handleClick}
                />
              </Col>
            </Row>
            <hr />
            <Row >
              <Col s={12} m={12} id="intro">
                <div>
  {pText.author?<span><h5>{pText.author}:</h5><p>{pText.quote}</p><hr/><p>Random quotes provided by stormconsultancy.co.uk API</p></span>:<p>{pText}</p>}
                </div>
              </Col>
            </Row>
            <hr />
            <Row id="iconR">
              <Col s={4} offset="s2">
                  <a href='https://github.com/ChristianH85'>
                  <FontAwesomeIcon id="bIcons" icon={faGithub} />
                  </a>
              </Col>
              <Col s={4} offset="s2">
              <a href='https://www.linkedin.com/in/christian-henry5/'>
              <FontAwesomeIcon id="bIcons" icon={faLinkedin}/>
              </a>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Home;
