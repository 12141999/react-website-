import React from 'react';
import './Project.css';
import 'bootstrap/dist/css/bootstrap.css';

class Project extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-12 flex-container">
                        <div class="flex-item">
                            <div class="flex-item-inner">
                                <a href="#">
                                    <div class="card-front bg-violet">
                                        <i class="fa fa-pie-chart fa-3x tile-icon icon-white"></i>
                                        <h4>Flexible Spending Account</h4>
                                        <p class="detail">$XXX,XXX</p>
                                    </div>
                                    <div class="card-back bg-violet">
                                        <p class="title">Lorem ipsum dolor sit amet</p>
                                        <p class="desc">Pellentesque magna nunc, fermentum nec ipsum non, consequat scelerisque dui.</p>
                                        <p class="link">Details <i class="fa fa-chevron-circle-right"></i></p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="flex-item">
                            <div class="flex-item-inner">
                                <a href="#">
                                    <div class="card-front bg-magenta">
                                        <i class="fa fa-heart fa-3x tile-icon icon-white"></i>
                                        <h4>HSA Total Balance</h4>
                                        <p class="detail">$XXX,XXX</p>
                                    </div>
                                    <div class="card-back bg-magenta">
                                        <p class="title">Praesent varius mi sem</p>
                                        <p class="desc">Cras posuere consequat nisl, ut rhoncus odio finibus sit amet. Sed consectetur dapibus.</p>
                                        <p class="link">Details <i class="fa fa-chevron-circle-right"></i></p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="flex-item">
                            <div class="flex-item-inner">
                                <a href="#">
                                    <div class="card-front bg-blue">
                                        <i class="fa fa-sun-o fa-3x tile-icon icon-white"></i>
                                        <h4>Your Paid Time Off Balance</h4>
                                        <p class="detail">$XXX,XXX</p>
                                    </div>
                                    <div class="card-back bg-blue">
                                        <p class="title">Vestibulum eget sem malesuada</p>
                                        <p class="desc">Etiam imperdiet ullamcorper dolor sit amet molestie. Quisque eu nibh in ligula.</p>
                                        <p class="link">Details <i class="fa fa-chevron-circle-right"></i></p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div class="flex-item">
                            <div class="flex-item-inner">
                                <a href="#">
                                    <div class="card-front bg-green">
                                        <i class="fa fa-bar-chart fa-3x tile-icon icon-white"></i>
                                        <h4>Savings Plan Total Balance</h4>
                                        <p class="detail">$XXX,XXX</p>
                                    </div>
                                    <div class="card-back bg-green">
                                        <p class="title">Curabitur elementum augue</p>
                                        <p class="desc">Nullam porttitor dui quis commodo mattis. Fusce posuere, nisl id ultrices pellentesque.</p>
                                        <p class="link">Details <i class="fa fa-chevron-circle-right"></i></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;