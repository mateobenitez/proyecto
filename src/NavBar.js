import React from 'react';

class NavBar extends React.Component{
    render() {
        return(
            <div className="navbar-fixed">
                <div className="row">
                    <nav  className="transparent">
                        <div className= "nav-wrapper" >
                            <div className="col s1 offset-s1">
                                <a href="#" className= "brand-logo lime-text"> FORAÜ</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
};

export default NavBar;