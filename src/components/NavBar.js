import React from 'react';

class NavBar extends React.Component{
    render() {
        return(
            <div>
               <div class="navbar navbar-dark bg-primary">
                    <div class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavBar;