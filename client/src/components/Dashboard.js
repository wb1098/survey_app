import React from 'react';
import {Link} from 'react-router-dom';

const Dashboard = () => {
    return (
     <div>  
        <h4>
        Welcome to the Customer Survey Dashboard - Check back as this page is sure to be updated.
        </h4>
        
          <div className="fixed-action-btn">
    <Link to="/surveys/new" className="btn-floating btn-large red">
      <i className="large material-icons">add</i>
    </Link>
    </div>
  </div>
    );
    
};

export default Dashboard;