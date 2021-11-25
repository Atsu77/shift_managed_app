import React from 'react';
import {Switch, Route} from 'react-router';
import TeachersList from './components/pages/TeachersList';
import SignUp from './components/pages/SignUp';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/teachers" component={TeachersList}/>
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  )
}

export default Router;