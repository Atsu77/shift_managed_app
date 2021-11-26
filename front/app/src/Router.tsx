import React from 'react';
import {Switch, Route} from 'react-router';
import TeachersList from './components/pages/TeachersList';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Home from './components/pages/Home';
import Auth from './components/templates/Auth';

const Router = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Auth>
        <Route exact path="/teachers" component={TeachersList}/>
      </Auth>
    </Switch>
  )
}

export default Router;