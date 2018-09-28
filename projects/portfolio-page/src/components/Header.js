import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <p className="titleFont"><b>CHOLO 3000</b></p>
                {/* <p className="titleFont"><b>3000</b></p> */}
          
                <div className="subTitleFont"><p>The web dev portfolio page for: <a href="http://gustavoadolfouribe.com/">Gustavo Adolfo Uribe</a></p></div> 

            </div>
        );
    }
}

export default Header;