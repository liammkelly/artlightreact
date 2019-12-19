import React from "react"
import { connect } from "react-redux"

const Selector = props => {
  const onSubmit = e => {
    e.preventDefault()
    const data = new FormData(e.target)
    props.requestClass(data)
  }

  return (
    <div id="selector_row" className="unauthenticated">
      <form onSubmit={onSubmit}>
        <div className="selector-area">
          <div className="selector-field">
            <div className="label" style={{ fontWeight: 900 }}>
              build your bliss:<span className="desktop-span">&nbsp;</span>
            </div>
            <div className="field"></div>
          </div>
          <div className="selector-field">
            <div className="label">
              pick the class<span className="desktop-span">&nbsp;</span>
            </div>
            <div className="field">
              <select id="classSelector">
                <option value=""></option>
                {props.classes.map(cls => (
                  <option key={cls.class_id} value={cls.name}>
                    {cls.name}
                  </option>
                ))}
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="selector-field">
            <div className="label">
              <span className="desktop-span">&nbsp;</span>pick your friends
            </div>
            <div className="field">
              <a href="mailto:">
                <span className="desktop-span">
                  &nbsp;
                  <span className="fa fa-envelope"></span>
                  &nbsp;
                </span>
                <span className="mobile-span">
                  <span className="fa fa-envelope"></span>
                  &nbsp;
                  <span className="fa fa-envelope"></span>
                  &nbsp;
                  <span className="fa fa-envelope"></span>
                </span>
              </a>
            </div>
          </div>
          <div className="selector-field">
            <div className="label">pick day + time</div>
            <div className="field">
              <select id="dateSelector">
                <option value=""></option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
              <select id="timeSelector">
                <option value=""></option>
                <option value="900">9:00 am</option>
                <option value="930">9:30 am</option>
                <option value="1000">10:00 am</option>
                <option value="1030">10:30 am</option>
                <option value="1100">11:00 am</option>
                <option value="1130">11:30 am</option>
                <option value="1200">12:00 pm</option>
                <option value="1230">12:30 pm</option>
                <option value="1300">1:00 pm</option>
                <option value="1330">1:30 pm</option>
                <option value="1400">2:00 pm</option>
                <option value="1430">2:30 pm</option>
                <option value="1500">3:00 pm</option>
                <option value="1530">3:30 pm</option>
                <option value="1600">4:00 pm</option>
                <option value="1630">4:30 pm</option>
                <option value="1700">5:00 pm</option>
                <option value="1730">5:30 pm</option>
                <option value="1800">6:00 pm</option>
                <option value="1830">6:30 pm</option>
                <option value="1900">7:00 pm</option>
                <option value="1930">7:30 pm</option>
                <option value="2000">8:00 pm</option>
              </select>
            </div>
          </div>
          <div className="selector-field" id="contact_info">
            <div className="label">contact info</div>
            <div className="field">
              <input type="text" id="mobile_contact_info" />
            </div>
          </div>
          <div className="selector-field">
            <div className="label"></div>
            <div className="field">
              <button className="btn" id="selectorSubmit">
                Request
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  classes: state.classes.classes
})

export default connect(mapStateToProps)(Selector)
