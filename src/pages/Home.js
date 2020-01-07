import React from "react";
import { connect } from 'react-redux';

function HomePage(props) {
    return (
        <div>
            <div id="wrap_video">
                <video id="player" loop autoPlay muted>
                    <source src={require("../public/videos/intro.mp4")} type="video/mp4" />
                    Your browser does not support this streaming content.
                </video>
            </div>

            <div className="mobile_square">
                <img src={require("../public/images/mobile/LogoPic.png")} />
            </div>

            <div id="text_area">
                <div className="title_blue">
                    what fills your cup?
                </div>

                <div className="subtitle desktop_div">
                    <p>Our mission is to help you live in the moment.</p>
                    <p>We think people forget to do that sometimes.</p>
                    <p>We imagine small groups bonding in <a href="/classes">classes</a> that combine the arts and mindfulness.</p>
                    <p>Does that sound like something you'd like to be a part of?</p>
                    <p>We've only just begun, we'd love your <a href="/feedback" className="feedback_lnk">feedback</a> and participation.</p>
                </div>

                <div className="subtitle mobile_div">
                    <p>Our mission is to help you live in the moment.  We think people forget to do that sometimes.  We imagine small groups bonding in <a href="/classes">classes</a> that combine the arts and midfulness.  Does that sound like something you'd like to be a part of?  We've only just begun, we'd love your <a href="/feedback">feedback</a> and participation.</p>
                </div>

            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(HomePage);
