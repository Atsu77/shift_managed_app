import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PrimaryButton from './components/atoms/PrimaryButton';
import TextInput from './components/atoms/TextInput';
import AuthForm from './components/molecules/AuthForm';
import Router from './Router';

function App() {
  return (
      <BrowserRouter>
        <AuthForm label={"test"}/>
        <Router />
      </BrowserRouter>
  );
}

export default App;
