import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'

function PrivateComponent() {
    const {currentUser} = useSelector((state)=>state.user)
  return (
    <div>{currentUser? <Outlet/>:<NavLink to="/signin" className="text-blue-800 underline">Click here to Sign In First </NavLink>}</div>
  )
}

export default PrivateComponent