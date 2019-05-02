import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';
import Robin from './images/robin1.jpg';

class About extends React.Component {
    render() {
        return (
            <div className="container section2 row">
                <div className="col-md-4 image">
                    <img src={Robin} className="img-responsive"></img>
                </div>
                <div className="col-md-8 about">
                    <h2>About Me</h2>
                    <p>
                        .  I am a 3rd year student at jaypee institute of information technology , noida.
                    </p><br />
                    <h2>
                        Contact Details
                    </h2>
                    <p>.  Robin Jain</p>
                    <p>.  Rajasthan(india)</p>
                    <p>.  portfolio-robin.herokuapp.com</p>
                    <p>.  robinjain9587@gmail.com</p>
                </div>
            </div>
        )
    }
}

export default About;