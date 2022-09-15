import React from 'react'
import { useState, } from 'react';
import '../App.css';
import Axios from 'axios';

const Friends = () => {
  const [FriendsList] = useState("");

  const submitReview = () => {
    Axios.post('http://localhost:3000/api/insert' ,
     {FriendsList: FriendsList})
  .then(() => {
    alert('sucessful insert!')
  })}


  return (
    <div className='App'>
      <h1>Check In With Friends!</h1>
      <label>Add Friends</label>
      <div className='form'>
        <input type='text' name='friends' onChange={(e) => {
          FriendsList(e.target.value)
        }} />
        <button onClick={submitReview}>Submit</button>
      </div>
    </div>
  )
}

export default Friends