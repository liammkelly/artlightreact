import React, { useEffect } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { connect } from "react-redux"

import { getClasses, setLocalUser } from "./actions"

import Header from "./components/Header"
import Selector from "./components/Selector"
import Footer from "./components/Footer"

import HomePage from "./pages/home-page"
import ClassesPage from "./pages/classes-page"
import InformationPage from "./pages/information-page"
import CalendarPage from "./pages/calendar-page"
import LoginPage from "./pages/login-page"
import RegistrationPage from "./pages/registration-page"
import ProfilePage from "./pages/profile-page"
import AddClassPage from "./pages/admin/add-class-page"
import EventListPage from "./pages/admin/event-list-page"
import ScheduleEventPage from "./pages/admin/schedule-event-page"
import AdminMenuPage from "./pages/admin/menu-page"

const App = props => {
  if (!props.user && localStorage.user) {
    props.setLocalUser()
  }

  useEffect(() => {
    props.getClasses()
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/admin" component={AdminMenuPage} />
        <Route path="/admin/add-class" component={AddClassPage} />
        <Route path="/admin/event-list" component={EventListPage} />
        <Route path="/admin/schedule-event" component={ScheduleEventPage} />
      </Switch>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/classes" component={ClassesPage} />
        <Route path="/information" component={InformationPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
      <Selector />
      <Footer />
    </Router>
  )
}

const mapStateToProps = state => ({
  classes: state.classes.classes,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => {
  return {
    getClasses: () => dispatch(getClasses()),
    setLocalUser: () => dispatch(setLocalUser())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)

export const Counter = ({ counter }) => (
  <span>
    <p>{counter}</p>
  </span>
);
