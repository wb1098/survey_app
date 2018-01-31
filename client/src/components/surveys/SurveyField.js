//Survey field contains logic to render a single 
//label and text input

import React from 'react';

export default ({input,label}) => {
    
    return (
      <div>        
        <label style={{color: "black", fontSize: "22px"}}>{label}</label>
        <input {...input}/>
      </div>
    );
};
