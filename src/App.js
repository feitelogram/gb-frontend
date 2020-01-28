import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Nav from './components/Nav';
import userActions from "./redux/actions"
import {useDispatch} from "react-redux"


const App = () => {

  const dispatch = useDispatch()

  const demoWatson = () => {
    window.loadWatsonAssistantChat({
      integrationID: process.env.REACT_APP_INTEGRATION, 
      region: "us-south" 
    }).then((instance) => {
      instance.render()
    }
    
      // instance.render();
    );
  }

  useEffect(() => {
    if(localStorage.token) {
    dispatch(userActions.persistUser())
  }
  dispatch(userActions.getAllProviders())
  demoWatson()
}, [dispatch]
  )

  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
};

export default App;