const keys = require('../../config/keys');

module.exports = (survey) => {
    
  return `
   <html>
     <body>  
        <div style = "text-align: center;">
          <h3> 
            Thanks for being a customer! In order to serve your needs better, we would like your input.
          </h3>
          <p> Please answer the following question: </p>
            <p> ${survey.body} </p>
              <div>  
                <button class="btn"><a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a></button>
              </div>
              <div>  
                <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
              </div>

        </div
     </body>
   </html>

`;  
};