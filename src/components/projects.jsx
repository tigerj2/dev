
import React from 'react'
import img from './../profile.jpg'
import ReactBootstrap, {Carousel} from 'react-bootstrap'
import { Component } from 'react'
import Caroshow from './../js/caroshow'

class projectpage extends Component{    
  
    render(){
        return(
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="projects">
        
            <div className="w-100">
                <h1 className="mb-5">Projects</h1>

                        <Caroshow>


                        </Caroshow>
                        <ol className="carousel-indicators">
                        </ol>
                      
            </div>
            </section>

        )
    }
}
export default projectpage
// import React, { Component } from 'react';
// import Carousel from './../../react-carousel';
// import './../../react-carousel/lib/style.css';
// export default class MyCarousel extends Component {
//   render() {
//     return (
//       <Carousel>
//         <img src={img} />
//         <img src={img} />
//         <img src={img} />
//       </Carousel>
//     );
//   }
// }
