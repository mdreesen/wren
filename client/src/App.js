import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider, operationName } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// Import pages
import Landing from './pages/Landing';

import Home from './pages/Home';
import UserQuestions from './pages/PatientQuestions'
import UserDocuments from './pages/UserDocuments';
import UserSettings from './pages/UserSettings';

import LoginMidwife from './components/LoginMidwife';
import WorkerHome from './pages/WorkerHome';
import BirthworkerProfile from './pages/Birthworkerprofile';
import BirthworkerSignup from './pages/BirthworkerSignup';
import WorkerSettings from './pages/WorkerSettings';

import AssociatedUsers from './pages/Users';
import AllBirthworkers from './pages/Birthworkers';
import NotAPage from './pages/NotAPage';
import SecondaryLoginForm from './components/SecondaryLoginForm';

// making the connection to the graphql backend server
// "uri" = Uniform Resource Identifier
// this function also sets up looking at the user when logged in
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing}/>

            <Route exact path="/user-login" component={SecondaryLoginForm} />
            <Route exact path="/user-questions" component={UserQuestions} />
            <Route exact path="/home" component={Home}/>
            <Route exact path="/user-documents" component={UserDocuments} />
            <Route exact path="/settings" component={UserSettings} />

            <Route exact path="/worker-login" component={LoginMidwife}/>
            <Route exact path="/birthworker/265317993996/signup" component={BirthworkerSignup}/>
            <Route exact path="/worker-home" component={WorkerHome}/>
            <Route exact path="/worker/users" component={AssociatedUsers}/>
            <Route exact path='/worker/settings' component={WorkerSettings} />

            <Route exact path="/profile/birthworker/:username" component={BirthworkerProfile}/>
            <Route exact path="/all-workers" component={AllBirthworkers} />
            <Route component={NotAPage}/>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
