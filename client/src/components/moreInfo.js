import React from 'react';
import {Link} from 'react-router-dom';

const moreInfo = () => {
    return ( 
    <div  style={{textAlign : 'center' }}>  
        
        
      <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title"><h4>More Information about the Survey City Application</h4></span>
              <p style={{marginBottom:"10px"}}>
        This application is made with React, Redux, MongoDB, Mongoose, Node, Express and many other open source librairies along with a whole lot of work!
        
        If your interested in this application or the developer. 
        </p>
        <h5 style={{marginBottom:"20px"}}>
           Click the Contact link below.
        </h5>
          <img src="img/peopleAtTheDoor.jpg" alt= "cartoon people at door"/>

            </div>
            <div className="card-action">        
              <a href="/">Contact Me</a>
            </div>
          </div>
        
        <Link to={'/'} className="Teal btn white-text" role="button">Home</Link>
        
        
        
    </div>

    );
};

export default moreInfo
