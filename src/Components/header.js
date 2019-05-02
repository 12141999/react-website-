import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <div id="container">
                <ul>
                    <li className="focused">Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Contact </li>
                </ul>
            </div>
        )
    }
}

export default Header;