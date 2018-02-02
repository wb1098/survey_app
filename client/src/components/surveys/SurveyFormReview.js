//survey form review shows the user their form inputs for review
import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({onCancel, formValues, submitSurvey,history}) => {
    
    const reviewFields = _.map(formFields, ({name,label}) => {
        return (
          <div key={name}>
             <label>{label}</label>
            <div> {formValues[name]} </div>
          </div>    
        );
    });
    
    
  return(
    <div>
      <h3> Please Confirm Your entries... </h3>  
      {reviewFields}
      <button className="orange darken-2 white-text btn" onClick={onCancel} style={{marginTop: "10px"}}>
        <i className="material-icons left">arrow_back </i>
          Back     
      </button>
      
      <button className="btn green white-text right" style={{marginTop: "10px"}}
      onClick={ () => submitSurvey(formValues, history)}
      > Send Survey <i className="material-icons right">email</i></button>
      
    </div>
  );
  
};

function mapStateToProps (state){
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps,actions) (withRouter(SurveyFormReview));