import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from "./components/Gallery";
import Home from "./components/Home";

import ErrorBoundary from "./components/ErrorBoundary";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useParams
} from "react-router-dom";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-3671138-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <Switch>
                    <Route path="/gallery/:id" render={(props) => <Gallery {...props} />}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
