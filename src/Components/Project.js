import React from 'react';
import './Project.css';
import 'bootstrap/dist/css/bootstrap.css';
import Chat from './images/chat.jpg';

class Project extends React.Component {
    render() {
        return (
            <div className="box">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">

                                {/* <i className="fa fa-instagram fa-3x" aria-hidden="true"></i> */}
                                <img className="Image" src={Chat} />

                                <div className="title">
                                    <h4>Node Chat-App</h4>
                                </div>

                                <div className="text">
                                    <span>it is a chat application using socket.io where any number of
person can chat each-other by making groups . it also have a
special feature of send current location.</span>
                                </div>

                                <a href="https://hidden-ocean-69880.herokuapp.com/">Learn More</a>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">

                                <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>

                                <div className="title">
                                    <h4>Coding-Kings</h4>
                                </div>

                                <div className="text">
                                    <span>it is a business used e-commerce type coaching institutes
website. here reference is coding-blocks .</span>
                                </div>

                                <a href="https://github.com/12141999/coding-kings">Learn More</a>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">

                                <i className="fa fa-facebook fa-3x" aria-hidden="true"></i>

                                <div className="title">
                                    <h4>Burger-e- commerce</h4>
                                </div>

                                <div className="text">
                                    <span>it is made by using react js . it is a front-end based website who
sell burger . here i used react js with redux .</span>
                                </div>

                                <a href="https://github.com/12141999/react_project">Learn More</a>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">

                                <i className="fa fa-pinterest-p fa-3x" aria-hidden="true"></i>

                                <div className="title">
                                    <h4>Campground</h4>
                                </div>

                                <div className="text">
                                    <span>it is a node js based application . it is full database using
application . here i used mongodb database and user can add
delete and update campground on this platform.</span>
                                </div>

                                <a href="https://github.com/12141999/Campground">Learn More</a>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">

                                <i className="fa fa-google-plus fa-3x" aria-hidden="true"></i>

                                <div className="title">
                                    <h4>Todo app</h4>
                                </div>

                                <div className="text">
                                    <span>it is a Todo app using MERN stack. there i can update delete add
any Todo list.</span>
                                </div>

                                <a href="https://github.com/12141999/MERN-todo-app">Learn More</a>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">

                            <div className="box-part text-center">

                                <i className="fa fa-github fa-3x" aria-hidden="true"></i>

                                <div className="title">
                                    <h4>Weather-app</h4>
                                </div>

                                <div className="text">
                                    <span>it is weather-app based on node js . here any user can get there
location temperature and also input location and give result of
there weather.</span>
                                </div>

                                <a href="https://github.com/12141999/weather-app">Learn More</a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Project;