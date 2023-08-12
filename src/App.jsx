import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import jwt_decode from 'jwt-decode'

//components import
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Login from './components/pages/Login'

function App() {
  // the currently logged in user will be stored up here in state
  const [currentUser, setCurrentUser] = useState(null)

  // useEffect -- if the user navigates away form the page, we will log them back in
  useEffect(() => {
    // check to see if token is in storage
    const token = localStorage.getItem('jwt')
    if (token) {
      // if so, we will decode it and set the user in app state
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
  }, []) // happen only once

  const handleLogout = () => {
    // check to see if a token exists in local storage
    if (localStorage.getItem('jwt')) {
      // if so, delete it
      localStorage.removeItem('jwt')
      // set the user in the App state to be null
      setCurrentUser(null)
    }
  }

  return (
    <div>
      <Router>
      <header>
        <NavBar 
          currentUser={currentUser}
          handleLogout={handleLogout}
        />
      </header>

      <div className='App'>
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />

          <Route 
            path="/profile"
            element={<Profile handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route 
            path='/register'
            element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

          <Route 
            path='/login'
            element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />}
          />

        </Routes>
      </div>

      </Router>
    </div>
  )
}

export default App
