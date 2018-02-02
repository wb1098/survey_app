//Survey form shows a form for users to input information
import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field}  from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';



class SurveyForm extends Component {
    
    renderFields() {
        return _.map(formFields, ({label, name}) => {
           return < Field key={name} component={SurveyField} type="text" label={label} name={name} /> 
        });
    };
    
    render(){
        return (
        <div>
            
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
              {this.renderFields()}
              
        
            <button className="teal btn right white-text" type="submit">
                Next
            <i className="material-icons right">done</i>
            </button>
            <Link to="/surveys" style= {{marginRight: "10px" }} className="red btn right white-text">Cancel
                <i className="material-icons right">cancel</i>
                </Link>
            </form>
            </div>
            
            
        )
    }
    
}

function validate(values) {
    const errors = {};
    
    errors.emails = validateEmails(values.recipients || '');
    
    _.each(formFields, ({name, noValueError}) => {
        if(!values[name]){
            errors[name] = noValueError;
        }
    })
    
    
    
    return errors;
}


export default reduxForm({
    validate,
    form:'surveyForm',
    destroyOnUnmount : false
    
}) (SurveyForm);