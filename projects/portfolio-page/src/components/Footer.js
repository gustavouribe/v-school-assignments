import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footerText">
                    <br></br>
                    <span><i class="fas fa-phone fa-flip-horizontal"></i> (805) 453-2786</span>
                    <span><i class="far fa-envelope"></i>GustavoAUribe1985@gmail.com</span>
                </div>
                <div className="footerIcons">   
                    <i class="fab fa-github"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube-square"></i>
                    <i class="fab fa-linkedin"></i>
                </div>
            </div>
        );
    }
}

export default Footer;