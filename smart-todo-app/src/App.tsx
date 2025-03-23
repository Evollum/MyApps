import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/settings" component={Settings} />
            </Switch>
        </Router>
    );
};

export default App;