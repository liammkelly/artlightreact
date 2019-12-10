import React from "react";
import { connect } from 'react-redux';

function InformationPage(props) {
    return (
        <>
            <div id="wrap_video">
                <video id="player" loop autoPlay muted>
                    <source src={require("../public/videos/Mandala.mp4")} type="video/mp4" />
                    Your browser does not support this streaming content.
                </video>
            </div>

            <div className="mobile_square">
                <img alt="information" src={require("../public/images/mobile/information.jpg")} />
            </div>

            <div id="text_area">
                <div className="title_blue">
                    not all those who wander are lost
                </div>
                        
                <div className="subtitle left-text" style={{width: "auto"}}>
                    <p>The idea is for you to spend more time with new friends and loved ones, engaging in activities
                        that bring you joy. We try to make it easy for you to start your own class by being flexible (you
                        choose the time) and by making it affordable (classes range from $10-$20 per person per class).</p>
                    <p>You may choose to initiate a class, in most cases, if you have three people interested, we can
                        start a session for you. Alternately, if you are interested in joining a class on your own, please
                        be sure to let us know and we’ll do our best to make it happen.</p>
                    <p><strong>Age:</strong> Our classes are aimed at everyone! Ages 7-100… and much like we are happy 
                        to have a spry 107 year old, we can make exceptions for the well behaved 6 year old.</p>
                    <p>We encourage you to breach the age gap and spend time with your grandma, your daughter, your 
                        brother or cousin, your neighbor or students. If taking an hour with this person would bring 
                        you joy, make it happen. </p> 
                    <p><strong>Allergies:</strong> We are not an allergy friendly environment. As much as we would 
                        like to include everyone, if you have a tree nut allergy, we do make marzipan animals (marzipan 
                        is an almond paste) on the art room and while we clean it after each use, it is not the ideal 
                        setting if your allergies are severe. We also have Luli (sweet and friendly dog) who will likely 
                        come sit by your feet during class.</p>
                    <p><strong>Pricing:</strong> We're trying to make these classes very affordable. They range from $10 
                    to $20 per class.</p>
                    <p>Visual arts classes are as follows: $10 for a 60 min class | $15 for a 90 min class | $20 for a 
                        120 min class </p>
                    <p>Music classes run for 60 min and are $20 per student.</p>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(InformationPage);
