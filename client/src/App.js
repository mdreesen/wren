import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

// Import pages
import Landing from './pages/Landing';
import UserInfoPage from './pages/UserInfoPage';
import Home from './pages/Home';
import NotAPage from './pages/NotAPage';
import LoginMidwife from './components/LoginMidwife';
import SecondaryLoginForm from './components/SecondaryLoginForm';
import WorkerPage from './pages/WorkerPage';



function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/settings/:user_id" component={UserInfoPage} />
          <Route exact path="/home" component={Home}/>
          <Route exact path="/worker-login" component={LoginMidwife}/>
          <Route exact path="/user-login" component={SecondaryLoginForm} />
          <Route exact path="/worker-home" component={WorkerPage}/>
          <Route component={NotAPage}/>
        </Switch>
      </div>
    </Router>

  );
}
//<Landing/>
export default App;
