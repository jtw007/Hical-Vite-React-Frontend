import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'

const Register = ({ currentUser, setCurrentUser }) => {
    //state for the controlled form
    const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [msg, setMsg] = useState('')

    //submit event handler 
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            //post form data to the backend
            const reqBody = {
                name,
                email,
                password, 
                //add phone number for backend in the future? 
            }
            // const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/`, reqBody)

            //save the token in local storage
            const { token } = response.data
            localStorage.setItem('jwt', token)

            //decode the token
            const decoded = jwt_decode(token)

            //set the user in App's state to be the decoded token
            setCurrentUser(decoded)

        } catch (error) {
            console.warn(error)
            if (error.response) {
                setMsg(error.response.data.msg)
            }
        }
    }

    //conditionally render a navigate component - navigate the user to the profile page when logged in
    // if (currentUser) {
	// 	return <Navigate to="/profile" />
	// }

    return (
        <div id='register-container'>
			<div id='register-message'>
				<h3>Create account:</h3>

				<p>{msg}</p>
			</div>
			

			<form onSubmit={handleSubmit} id='register-form'>
				<label htmlFor='name'>Name:</label>
				<input 
					type="text"
					id="name"
					placeholder='your username...'
					onChange={e => setName(e.target.value)}
					value={name}
					required
				/>

				<label htmlFor='email'>Email:</label>
				<input 
					type="email"
					id="email"
					placeholder='your email...'
					onChange={e => setEmail(e.target.value)}
					value={email}
					required
				/>

				<label htmlFor='password'>Password:</label>
				<input 
					type="password"
					id="password"
					placeholder='password...'
					onChange={e => setPassword(e.target.value)}
					value={password}
					required
				/>

				<button type="submit" id='register-btn'>Register</button>
				<div id="register-rickroll">
					<p>Don't want to register? <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target="_blank">Click here</a></p>
				</div>
				<div id="register-login">
					<p>Already have an account? <a href='/login'>Login here</a></p>
				</div>
			</form>
		</div>
    )
}

export default Register