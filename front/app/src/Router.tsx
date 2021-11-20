import React from 'react';
import {Switch, Route} from 'react-router';
import TeachersList from './components/pages/TeachersList';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/teachers" component={TeachersList}/>
    </Switch>
  )
}

export default Router;