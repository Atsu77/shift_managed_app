import React from 'react';
import {Switch, Route} from 'react-router';
import TeachersList from './components/pages/TeachersList';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Home from './components/pages/Home';
import Auth from './components/templates/Auth';
import SelectUserType from './components/pages/SelectUserType';

const Router = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/selectuser" component={SelectUserType} />
      <Auth>
        <Route exact path="/teachers" component={TeachersList}/>
      </Auth>
    </Switch>
  )
}

export default Router;