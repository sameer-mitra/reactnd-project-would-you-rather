import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import Login from './Login';
import Nav from './Nav';
import Dashboard from './Dashboard';
import User from './User';
import QuestionNew from './QuestionNew';
import Leaderboard from './Leaderboard';
import Error from './Error';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <div className="App">
          {authedUser === null ? (
            <Route
              render={() => (
                <Login />
              )}
            />
          ) : (
            <Fragment>
              <Nav />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/questions/error" component={Error} />
                <Route path="/questions/:question_id" component={User} />
                <Route path="/add" component={QuestionNew} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route component={Error} />
              </Switch>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);
//  mapStateToProps, { handleInitialData }
