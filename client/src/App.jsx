import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import FindATutor from './pages/FindATutor/FindATutor';
import BecomeATutor from './pages/BecomeATutor/BecomeATutor';
import SignUp from './pages/SignUp/signUp';
import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/courses" component={Courses} />
          <Route path="/find-a-tutor" component={FindATutor} />
          <Route path="/become-a-tutor" component={BecomeATutor} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

//sample app
//branch1 sample test

export default App;