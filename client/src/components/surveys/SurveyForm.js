//Survey form shows a form for users to input information
import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field}  from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    {label: 'Survey Title', name: 'title', noValueError: 'You must provide a Survey Title!'},
    {label: 'Email Subject Line', name: 'subject', noValueError: 'You must provide a Subject Line for the email!'},
    {label: 'Email Body', name: 'body', noValueError: 'You must provide a text body for the email!'},
    {label: 'Recipient List', name: 'emails', noValueError: 'You must provide at least one email address!'},
    
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

function validate(values) {
    const errors = {};
    
    errors.emails = validateEmails(values.emails || '');
    
    _.each(FIELDS, ({name, noValueError}) => {
        if(!values[name]){
            errors[name] = noValueError;
        }
    })
    
    
    
    return errors;
}


export default reduxForm({
    validate,
    form:'surveyForm'
}) (SurveyForm);