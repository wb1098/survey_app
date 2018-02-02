import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    
    render() {        

        return(
          <StripeCheckout 
            name="Customer Survey Credits"
            description="$5.00 for 5 email/survey credits"
            
            //amount is in USA cents            
            amount={500}
            token={token => this.props.handleToken(token)}
          //  stripeKey={process.env.REACT_APP_STRIPE_KEY}
             stripeKey = 'pk_test_sWBeQ1yY5Dt9MhFVq4qksk8y'
          > 
                
            <button className="green btn white-text">
                Add Credits                
            </button>      
          </StripeCheckout>  
            
            
        );
    };
}


export default connect(null, actions) (Payments);