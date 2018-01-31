//Survey form shows a form for users to input information
import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field}  from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';

const FIELDS = [
    {label: 'Survey Title', name: 'title'},
    {label: 'Email Subject Line', name: 'subject'},
    {label: 'Email Body', name: 'body'},
    {label: 'Recipient List', name: 'emails'},
    
];

class SurveyForm extends Component {
    
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
           return < Field key={name} component={SurveyField} type="text" label={label} name={name} /> 
        });
    };
    
    render(){
        return (
        <div>
            What do you know you are at Survey Form - Hubba Hubba Hubba!
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
              {this.renderFields()}
              
        
            <button className="teal btn right white-text" type="submit">
                Next
            <i className="material-icons right">done</i>
            </button>
            <Link to="/surveys" style= {{marginRight: "10px" }} className="red btn right white-text">Cancel</Link>
            </form>
            </div>
            
            
        )
    }
    
}

export default reduxForm({
    form:'surveyForm'
}) (SurveyForm);