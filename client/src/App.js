import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import pages
import Landing from './pages/Landing';
import UserInfoPage from './pages/UserInfoPage';
import Home from './pages/Home';
import NotAPage from './pages/NotAPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/user-info" component={UserInfoPage} />
          <Route exact path="/home" component={Home}/>

          <Route component={NotAPage}/>
        </Switch>
      </div>
    </Router>

  );
}
//<Landing/>
export default App;
