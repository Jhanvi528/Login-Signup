import React from 'react'
import { useNavigate } from 'react-router-dom'

function Homepage () {
  const navigate = useNavigate()
  return (
    <div className='homepage container'>
      <h1>Success</h1>
      <input
        type='button'
        value='Log Out'
        name='log-out'
        onClick={() => navigate('/', { replace: true })}
      ></input>
    </div>
  )
}
export default Homepage