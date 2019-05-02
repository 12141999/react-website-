import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
// import Social from '../functions/socialfunc';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            hi: '',
            count: 0
        }
    }

    componentDidMount() {
        const k = "I AM ROBIN JAIN";
        const hi = "HI,"
        this.interval = setInterval(() => {
            let c = this.state.count
            if (c < 3) {
                this.setState(prevState => ({
                    hi: prevState.hi + hi[c]
                }));
            }
            if (c < 15) {
                this.setState(prevState => ({
                    name: prevState.name + k[c],
                    count: prevState.count + 1
                }));
            }
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="container">
                <div className='heading' >
                    {this.state.hi} < br />
                    {this.state.name}
                </div>
                <div >
                    <p className='para'>
                        I am a MERN Stack Developer.I like dabbling in various parts of backend development and frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.
            </p>
                </div>
                    <div align="center" className="socialbtns">
                        <ul>
                            <li><a href="https://www.facebook.com/robin.jain.904108" className="fa fa-lg fa-facebook"></a></li>
                            <li><a href="#" className="fa fa-lg fa-twitter"></a></li>
                            <li><a href="https://github.com/12141999" className="fa fa-lg fa-github"></a></li>
                            <li><a href="https://www.linkedin.com/in/robin-jain-895176162/" className="fa fa-lg fa-linkedin"></a></li>
                            <li><a href="https://www.instagram.com/robinjain12101999/?hl=en" className="fa fa-lg fa-instagram"></a></li>
                        </ul>
                    </div>
                <hr />



            </div >
        )
    }
}
export default Main;