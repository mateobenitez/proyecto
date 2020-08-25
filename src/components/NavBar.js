import React from 'react';

class NavBar extends React.Component{
    render() {
        return(
            <div className="navbar-fixed">
                <nav  className="transparent">
                    <div className= "nav-wrapper" >
                        <a href="#" className= "brand-logo lime-text"> FORAÜ</a>
                        <ul id="nav-mobile" className= "right hide-on-med-and-down">
                            <li><a href="#">a</a></li>
                            <li><a href="#">a</a></li>
                            <li><a href="#">a</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
};

export default NavBar;