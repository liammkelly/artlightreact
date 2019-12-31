import React, { useState } from "react"
import { connect } from "react-redux"
import { addNewClass } from "../../actions/admin"
import AdminWrapper from "./AdminWrapper"

const mapDispatchToProps = { addNewClass }

const ConnectedClassForm = props => {
  const [title, setTitle] = useState("")

  const handleChange = event => setTitle(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()
    props.addNewClass({ title })
    setTitle("")
  }

  return (
    <AdminWrapper>
      <div className="admin-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Class Name</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <button type="submit">SAVE</button>
        </form>
      </div>
    </AdminWrapper>
  )
}
const ClassForm = connect(null, mapDispatchToProps)(ConnectedClassForm)
export default ClassForm
