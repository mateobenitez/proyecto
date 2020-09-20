
import React from 'react';
import "./footer.css"; 

class footer extends React.Component{
    render() {
        return(
            <div>
                <footer id="sticky-footer" className="py-4">
                    <div className="ml-5 footer-forau">
                        <p>FORAÜ</p>
                    </div>
                    <br></br>
                    <div className="ml-5 footer-copy">
                        <p>&copy; 2020 FORAÜ. Todos los derechos reservados</p>
                    </div>
                </footer> 
            </div>
        )
    }
} 


export default footer;