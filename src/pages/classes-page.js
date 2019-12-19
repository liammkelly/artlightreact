import React, { useEffect } from "react"
import { connect } from "react-redux"

const ClassesPage = props => {
  return (
    <div id="text_area" style={{margin:0,width:"100%"}}>
        {props.classes.map(cls => cls.sort_order > 0 ? (
            <div key={cls.class_id} className="class">
                <a name={cls.name.replace(/\s+/g, '-').toLowerCase()}>
                {cls.image.indexOf("mp4") >= 0 ?
                    <div className="class_video">
                        <video loop autoPlay muted>
                            <source src={require(`../public/videos/classes/${cls.image}`)} type="video/mp4" />
                            Your browser does not support this streaming content.
                        </video>
                    </div> :
                    <img alt={cls.name} src={require(`../public/images/classes/${cls.image}`)} className="class_rectangle" />}
                </a>
                <div className="mobile_square">
                    <img alt={cls.name} src={require(`../public/images/mobile/${cls.mobile_image}`)} />
                </div>
                <div className="details" style={{padding:" 0 10%", width: "auto"}}>
                    <p><strong>{cls.name}: {cls.subtitle}</strong></p>
                    <p>{cls.description}</p>
                    <p>To sign up, simply pay with <a href="https://venmo.com/code?user_id=2872140462292992824" target="_blank">Venmo</a></p>
                </div>
            </div>
        ) : '')}
    </div>
  )
}

// { {% with current_class=class.class_id %}
// {% include 'class_info.html' %}
// {% endwith %} }


const mapStateToProps = state => ({
  classes: state.classes.classes
})

export default connect(mapStateToProps)(ClassesPage)
