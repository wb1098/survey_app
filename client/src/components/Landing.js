import React from 'react';

const Landing = () => {
    return ( 
    <div  style={{textAlign : 'center' }}>  
        
    <div id="content_Div">    
        <img src="img/group_photo.jpg" alt="group cartoon" height="320px" width= "auto"     />
        
        <p> If your customers could all sit down in a room with you, just think of the information you could get from them.  </p>
    </div>
        
      <div className="jumbotron hero_landing" style={{marginTop : '20px'}}>
        <div className="container">
        <h1 style={{fontFamily: "fantasy" }}>
          Survey City 
        </h1>       
        
        <h3> Collect vital feedback from your customers! </h3>
        
        <p> Do you know what your customers think of your Service?</p>
        <p> Do you know what your customers think of your Product?</p>
        <p> Do you know what your customers think of your Company?</p>
        
        <h5 id="call_to_action_text"> Click the button below for information on getting feedback from your customers!</h5>
        
        <p><a className="Teal btn white-text" href="/moreInfo" role="button">Learn more</a></p>
     </div>
    </div>

        
        
        
        
     </div>
    );
};

export default Landing
