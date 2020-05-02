import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
//import Alert from "./layout/Alert";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Users from './pages/Users';
import MyGroups from "./pages/MyGroups";
import Group from "./pages/Group";
import Events from "./pages/Events";
import MyEvents from "./pages/MyEvents";
import EditProfile from "./pages/EditProfile";
import CreateGroup from "./pages/CreateGroup";
import CreateEvent from "./pages/CreateEvent";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./components/routing/PrivateRoute";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

//import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/profile/edit" component={EditProfile} />
          <Route exact path="/users" component={Users} />
          <PrivateRoute exact path="/groups" component={MyGroups} />
          <PrivateRoute exact path="/groups/:id" component={Group} />
          <PrivateRoute exact path="/create/group" component={CreateGroup} />
          <PrivateRoute exact path="/groups/events/:groupID" component={Events} />
          <PrivateRoute exact path="/events" component={MyEvents} />
          <PrivateRoute exact path="/create/event/:groupID" component={CreateEvent} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
