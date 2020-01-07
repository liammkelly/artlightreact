import React, { useState, useEffect } from "react"

const MenuPage = props => {
  return (
      <ul>
          <li><a href="/admin/schedule-event">Schedule Event</a></li>
          <li><a href="/admin/event-list">Event List</a></li>
          <li><a href="/admin/add-class">Add Class</a></li>
      </ul>
  )
}
export default MenuPage
