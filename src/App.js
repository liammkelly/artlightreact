import React, { useEffect, useState } from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import { connect } from "react-redux"

import { setLocalUser } from "./actions/auth"
import { getClasses } from "./actions/classes"

import Header from "./components/Header"
import Selector from "./components/Selector"
import Footer from "./components/Footer"

import HomePage from "./pages/Home"
import ClassesPage from "./pages/Classes"
import InformationPage from "./pages/Information"
import CalendarPage from "./pages/Calendar"
import LoginPage from "./pages/Login"
import RegistrationPage from "./pages/Registration"
import ProfilePage from "./pages/Profile"
import FeedbackPage from "./pages/Feedback"

import AddClassPage from "./pages/admin/AddClass"
import EventListPage from "./pages/admin/EventList"
import ScheduleEventPage from "./pages/admin/ScheduleEvent"
import AdminMenuPage from "./pages/admin/Menu"

const App = props => {
  if (!props.user && localStorage["tals-user"]) {
    props.setLocalUser()
  }

  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    props.getClasses()
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  const isMobile = width <= 500
  
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
        <Route path="/classes" render={props => <ClassesPage isMobile={isMobile} />} />
        <Route path="/information" component={InformationPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/feedback" component={FeedbackPage} />
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
