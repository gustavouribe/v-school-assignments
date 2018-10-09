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
                    <a href="https://github.com/gustavouribe" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    <a href="https://www.instagram.com/gaumusic/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCHh9vuUvxBf5BZlKees1X5A" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube-square"></i></a>
                    <a href="https://www.linkedin.com/in/gustavo-adolfo-uribe/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
        );
    }
}

export default Footer;