import React from 'react'
import img from './../profile.jpg'
import bird from './../images/twitterbird.png'
import Flappy from './../flapbird.png'
import teddy from './../images/teddygame.png'
import Swing from './../swing.png'
import Quartus from './../quartus.png'
import VHDL from './../images/vhdl.png'
import Cherry from './../images/cherry.png'
import ReactBootstrap, {Carousel} from 'react-bootstrap'
import { Component } from 'react'
import javagame from './../downloads/Finding_Teddy.jar'
import 'bootstrap/dist/css/bootstrap.min.css';

function ControlledCarousel() {
    const [index, setIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (       

      <Carousel onSelect={handleSelect} >

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={teddy}
            alt="First slide"
          />

            <h7 align="middle">Zelda Clone</h7>

                <div className="caro-icons" align="middle">
                  <a href="https://github.com/tigerj2/Zelda-Clone">
                    <i className="fab fa-github" ></i>


                  </a>
                  <a href={javagame} download="Finding_teddy.jar"> 
                  <i className="fa fa-download" ></i>
                   </a>
                </div>
            <p>Clone of the original "Legend of Zelda", written in Java utilising the Swing library. </p>
            <p>        Click the Github icon for the source files. 
              To play the game, click the hard drive icon to download the jar and run java -jar Finding_teddy.jar" if you're running Ubuntu, otherwise double click the Finding_teddy.jar file</p>
            <h4>I do not recommend playing this on a virtual machine as it will be extremely slow</h4>
            <h7 className="mb-5">Software used in this project</h7>

            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-java"></i>
              </li>
              <li className="list-inline-item">
                <img src={Swing} style={{width: 60, height: 60}}></img>
              </li>
            </ul>
            <p>Java | Java Swing</p>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bird}
            alt="Second slide"
          />
  
                <h7>Twitter Clone</h7>
                <div className="caro-icons" align="middle">
                  <a href="https://github.com/tigerj2/Python-Cherrypy-TwitterClone">
                    <i className="fab fa-github" ></i>
                  </a>
                </div>
                <p>A Twitter clone which allows private messaging among a group of friends when a central server is hosted. Leverages SQLite databases, the Cherrypy Python library and other API's.</p>
                <p>Click the Github icon for the source files.</p>
                <h4>The source files cannot be run as of the moment as there is no server to connect the app to</h4>
                <h7 className="mb-5">Software used in this project</h7>

                <ul className="list-inline dev-icons">
                  <li className="list-inline-item">
                    <i className="fab fa-python"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-html5"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-css3"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-js"></i>
                  </li>              
                  <li className="list-inline-item">
                  <img src={Cherry} style={{width: 60, height: 60}}></img>
              </li>
                </ul>
                <p>Python | HTML | CSS | Flask/Jinja</p>

            
            </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Flappy}
            alt="Third slide"
          />
  
            <h7>FlappyBird Clone</h7>

            <div className="caro-icons" align="middle">
                  <a href="https://github.com/tigerj2/cs305_flappybird">
                    <i className="fab fa-github" ></i>
                  </a>
                </div>
                <p>Flappy bird clone created in VHDL. Uses an Altera DE0 board for GPIO/Connector pins for input/output. The game is played using a PS2 connection mouse.</p>
                <p>Click the Github icon for the source files.</p>
                <h4>The source files cannot be run unless you flash the HDL files onto an Altera DE0 board</h4>
                <h7 className="mb-5">Languages used in this project</h7>

                <ul className="list-inline dev-icons">
                  <li className="list-inline-item">
                    <img src={Quartus} style={{width: 60, height: 60}}></img>
                  </li>
                  <li className="list-inline-item">
                    <img src={VHDL} style={{width: 60, height: 60}}></img>
                  </li>
                </ul>
                <p>Quartus 2 Simulator | VHDL</p>
        </Carousel.Item>

      </Carousel>

    );
  }
export default ControlledCarousel