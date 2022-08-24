import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'

function Join() {

  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
    console.log(event.target.value)
  }

  const handleRoom = (event) => {
    setRoom(event.target.value)
  }

  const handleClick = (event) => (
    (!room || !name) ? event.preventDefault(alert('You need to fill the fields')) : null
  )

  return (
    <div className="join__outter-container">
      <div className="join__inner-container">
        <h1 className="heading">Join</h1>
        <div><input type="text" placeholder='Introduce your name' className='join__input' onChange={handleName} /></div>
        <div><input type="text" placeholder='Select the chat room' className='join__input' onChange={handleRoom} /></div>
        <Link to={`/chat?name=${name}&${room}`}>
          <button className='btn mt-20' type='submit' onClick={handleClick}> Sing In</button>
        </Link>
      </div>
    </div>
  )
}

export default Join