import React, {Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return (
                <li><a href="/auth/google"><strong>Log In with Google</strong></a> </li>
                    )
            default:
                return [
                    <li key="1"><Payments /></li>, 
                    <li key="2" style = {{margin: '0 10px'}}>
                    Credits: {this.props.auth.credits}</li>, 
                    <li key="3"><a href="/api/logout">Log Out</a></li>
                       ]
        }
    }
    
    render () {        
        return (
            <nav id="header_Nav">
              <div className="blue nav-wrapper">
                <Link 
                  to={this.props.auth ? '/surveys' : '/'}         
                  className="left brand-logo"          
                 >
            <h4 id="header-logo" style ={{marginLeft :"10px"}}>
                  Survey City 
            </h4>
            
                </Link>
                 <ul className="right">
                  {this.renderContent()}

                </ul>
              </div>
            </nav>
        );
    }
}
function mapStateProps({auth}){
    return {auth};
}


export default connect(mapStateProps)(Header);