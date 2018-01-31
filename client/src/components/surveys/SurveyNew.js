//Survey New shows survey Form and Survey Review

import React, {Component} from 'react';
import SurveyForm  from './SurveyForm';

class SurveyNew extends Component {
    render(){
        return (
        <div>
            What do you know you are at Survey New
            <SurveyForm />
            </div>
        )
    }
    
}

export default SurveyNew;