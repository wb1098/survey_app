import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import moreInfo from './moreInfo';





class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    
    render(){
      return ( <div className="container">
               <BrowserRouter>
                 <div> 
                   <Header />            
                     <Route exact path="/" component={Landing}/>       
                     <Route exact path="/surveys" component={Dashboard}/>
                     <Route exact path="/surveys/new" component={SurveyNew}/>     
              
                     <Route exact path="/moreInfo" component={moreInfo}/>                   
                 </div>
               </BrowserRouter>
              
              
    <ul id="slide-out" class="side-nav">
    <li><div class="user-view">

      <a href="#!user"><img class="circle" src="images/yuna.jpg"/></a>
      <a href="#!name"><span class="white-text name">John Doe</span></a>
      <a href="#!email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
              
             </div>
           );
    }
};

export default connect(null, actions)(App);
