import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import React from 'react'

const Home = () => {
  return (
    <div>
        <h2>Hello this is home page</h2>
        <Link to='/register'>Register for an Account</Link>
        {/* profile link will eventually only be accessible for logged in users only */}
        <Link to='/profile'>Profile</Link> 
        <Link to='/login'>Login</Link> 
    </div>
  )
}

export default Home