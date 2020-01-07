import React, { useState } from "react"
import { connect } from "react-redux"
import Modal from "react-modal"
import { requestClass } from "../actions/classes"
import { talsBlue, modalStyles } from "../styles/styleVars"
import styled from "styled-components"

Modal.setAppElement("#root")

const ModalContainer = styled.div`
  button {
    font-size: 1.2em !important;
    padding: 5px 10px;
    cursor: pointer;
    border: 2px solid ${talsBlue};
    margin: 2px;
  }
`

const Selector = props => {
  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false)
  const [contactInfoModalIsOpen, setContactInfoModalIsOpen] = useState(false)
  const [selectorData, setSelectorData] = useState(null)

  const closeContactInfoModal = () => {
    setContactInfoModalIsOpen(false)
  }

  const closeConfirmationModal = () => {
    setConfirmationModalIsOpen(false)
  }

  const openContactInfoModal = () => {
    setContactInfoModalIsOpen(true)
  }

  const openConfirmationModal = () => {
    setConfirmationModalIsOpen(true)
  }

  const onSubmit = evt => {
    evt.preventDefault()

    let data = new FormData(evt.target)

    if (props.user) {
      data.set("name", props.user.username)
      data.set("contactinfo",`phone: ${props.user.phone} | email: ${props.user.email}`)
    }

    if (data.get("contactinfo") === "") {
      requestContactInfo(data)
    } else {
      props.requestClass(data)
    }
  }

  const requestContactInfo = data => {
    setSelectorData(data)
    openModal()
  }

  const saveContactInfo = evt => {
    evt.preventDefault()

    let data = selectorData
    data.set("name", evt.target[0].value)
    data.set("contactinfo", evt.target[1].value)

    props.requestClass(data)
  }

  if (props.didRequestClass) {
    openConfirmationModal()
  }

  return (
    <>
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
                <select id="classSelector" name="className">
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
                <select id="dateSelector" name="dayOfWeek">
                  <option value=""></option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
                <select id="timeSelector" name="time">
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
                <input
                  type="text"
                  id="mobile_contact_info"
                  name="contactinfo"
                />
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

      <Modal
        isOpen={contactInfoModalIsOpen}
        onRequestClose={closeContactInfoModal}
        style={modalStyles}
        contentLabel="Contact Info"
      >
        <ModalContainer>
          <div>Please give us a little more information with your request.</div>
          <form onSubmit={saveContactInfo}>
            <div className="selector-field">
              <div className="label">Name</div>
              <div className="field">
                <input type="text" name="modal_name" />
              </div>
            </div>
            <div className="selector-field">
              <div className="label">Email or Phone Number</div>
              <div className="field">
                <input type="text" name="modal_contactinfo" />
              </div>
            </div>
            <button>submit request</button>
            <button onClick={closeModal}>cancel</button>
          </form>
        </ModalContainer>
      </Modal>
      <Modal
        isOpen={confirmationModalIsOpen}
        onRequestClose={closeConfirmationModal}
        style={modalStyles}
        contentLabel="Thank you"
      >
        <ModalContainer>
          <div>Thanks for your request!  We'll be in touch within 24 hours.</div>
          <button onClick={closeConfirmationModal}>OK</button>
        </ModalContainer>
      </Modal>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  classes: state.classes.classes,
  didRequestClass: state.classes.didRequestClass
})

const mapDispatchToProps = dispatch => {
  return {
    requestClass: cls => dispatch(requestClass(cls))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector)
