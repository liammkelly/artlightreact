import React, { useState } from "react"
import { connect } from "react-redux"
import StarRatingComponent from "react-star-rating-component"
import { submitFeedback } from "../actions"
import Modal from "react-modal"

import { talsBlue, modalStyles } from "../styles/styleVars"
import styled from "styled-components"

Modal.setAppElement("#root")

const FeedbackContainer = styled.div`
  textarea,
  input {
    font-size: 16px;
  }

  .classSection {
    float: left;
    clear: both;

    .classDiv {
      width: 100%;
      clear: both;

      .title {
        width: 200px;
        float: left;
        clear: left;
      }
      .rating {
        float: left;
        clear: none;
      }
    }
  }
`

const FeedbackPage = props => {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [ratings, setRatings] = useState({})

  const closeModal = () => {
    setIsOpen(false)
  }

  const concludeFeedback = () => {
    window.location = "/"
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const onStarClick = (nextValue, prevValue, name) => {
    setRatings({ ...ratings, [name]: nextValue })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const data = new FormData(evt.target)

    for (let [key, value] of Object.entries(ratings)) {
      data.set(key, value)
    }

    props.submitFeedback(data)

    openModal()
  }

  return (
    <FeedbackContainer>
      <div id="text_area">
        <form id="feedback" method="POST" onSubmit={onSubmit}>
          <p>
            Thank you so much for taking the time to help out by taking this
            survey – your feedback is truly appreciated!! We hope to mold Art &
            Light Society into a place that brings you joy.
          </p>

          <p>
            In your own words, please describe what you perceive Art & Light
            Society to be:
          </p>
          <textarea name="what_perceive"></textarea>

          <div className="classSection">
            <p>
              How would you rate your interest in the following (current)
              classes?
            </p>
            {props.classes.map(cls => (
              <div className="classDiv" key={cls.class_id}>
                <div className="title">{cls.name}</div>
                <div className="rating">
                  <StarRatingComponent
                    name={cls.name.replace(/ /g, "_")}
                    onStarClick={onStarClick}
                    starColor={talsBlue}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="classSection">
            <p>
              How would you rate your interest in the following (future)
              classes?
            </p>
            <div className="classDiv">
              <div className="title">Tai Chi</div>
              <div className="rating">
                <StarRatingComponent
                  name="tai-chi"
                  onStarClick={onStarClick}
                  starColor={talsBlue}
                />
              </div>
            </div>
            <div className="classDiv">
              <div className="title">Seasonal and holiday art</div>
              <div className="rating">
                <StarRatingComponent
                  name="holiday-art"
                  onStarClick={onStarClick}
                  starColor={talsBlue}
                />
              </div>
            </div>
            <div className="classDiv">
              <div className="title">Meditation</div>
              <div className="rating">
                <StarRatingComponent
                  name="meditation"
                  onStarClick={onStarClick}
                  starColor={talsBlue}
                />
              </div>
            </div>
            <div className="classDiv">
              <div className="title">Acting/Improv</div>
              <div className="rating">
                <StarRatingComponent
                  name="acting-improv"
                  onStarClick={onStarClick}
                  starColor={talsBlue}
                />
              </div>
            </div>
            <div className="classDiv">
              <div className="title">Comic book writing</div>
              <div className="rating">
                <StarRatingComponent
                  name="comic-book-writing"
                  onStarClick={onStarClick}
                  starColor={talsBlue}
                />
              </div>
            </div>
            <div className="classDiv">
              <div className="title">Jewelry making</div>
              <div className="rating">
                <StarRatingComponent
                  name="jewlery-making"
                  onStarClick={onStarClick}
                  starColor={talsBlue}
                />
              </div>
            </div>
          </div>

          <div className="classSection">
            <p>What classes would you like to have us add?</p>
            <textarea name="class_suggestions"></textarea>
          </div>

          <div className="classSection">
            <p>
              Who do you think would enjoy these classes most (check any that
              apply)?
            </p>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="who_classes"
                  value="just my kids"
                  id="who1"
                />
                <label htmlFor="who1">Just my kids</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="who_classes"
                  value="me with like-minded people"
                  id="who2"
                />
                <label htmlFor="who2">me with like-minded people</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="who_classes"
                  value="me with friends"
                  id="who3"
                />
                <label htmlFor="who3">me with friends</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="who_classes"
                  value="me with co-workers"
                  id="who4"
                />
                <label htmlFor="who4">me with co-workers</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="who_classes"
                  value="me with family"
                  id="who5"
                />
                <label htmlFor="who5">me with family</label>
              </li>
            </ul>
          </div>

          <div className="classSection">
            <p>
              What times would be most convenient for you (check any that
              apply)?
            </p>
            <ul>
              <li>
                <input
                  type="checkbox"
                  name="when_classes"
                  value="Late morning"
                  id="when1"
                />
                <label htmlFor="when1">Late morning</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="when_classes"
                  value="noon"
                  id="when2"
                />
                <label htmlFor="when2">noon</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="when_classes"
                  value="early afternoon"
                  id="when3"
                />
                <label htmlFor="when3">early afternoon</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="when_classes"
                  value="late afternoon"
                  id="when4"
                />
                <label htmlFor="when4">late afternoon</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  name="when_classes"
                  value="evening"
                  id="when5"
                />
                <label htmlFor="when5">evening</label>
              </li>
            </ul>
          </div>

          <div className="classSection">
            <p>Any other feedback/questions/comments?</p>
            <textarea name="comments"></textarea>
          </div>

          <div className="classSection">
            <div className="controls">
              <button id="submit" className="btn">
                Submit feedback
              </button>
              <div id="feedback_success">Thank you!</div>
            </div>
          </div>
        </form>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Thanks"
      >
        <div>Thank you for submitting your feedback!</div>
        <button onClick={concludeFeedback}>OK</button>
      </Modal>
    </FeedbackContainer>
  )
}

const mapStateToProps = state => ({
  classes: state.classes.classes
})

const mapDispatchToProps = dispatch => {
  return {
    submitFeedback: data => dispatch(submitFeedback(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackPage)
