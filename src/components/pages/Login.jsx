import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'

const Login = ({ currentUser, setCurrentUser }) => {
    // state for controlled form 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
	const [msg, setMsg] = useState('')

    // submit event handler
	const handleSubmit = async e => {
		e.preventDefault()
		try {
			// post form data to the backend
			const reqBody = {
				email, 
				password
			}
			// const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/`, reqBody)

			// save the token in localstorage
			// const { token } = response.data
			// localStorage.setItem('jwt', token)

			// decode the token
			// const decoded = jwt_decode(token)

			// set the user in App's state to be the decoded token
			// setCurrentUser(decoded)

		} catch (err) {
			console.warn(err)
			// if (err.response) {
			// 	setMsg(err.response.data.msg)
			// }
		}
 	}

    // conditionally render a navigate component
	// if (currentUser) {
	// 	return <Navigate to="/profile" />
	// }

    return (
        <div>
            <p>Login to your account</p>
            <div>
                {/* <p>{msg}</p> */}
            </div>
            <div className='post-container'>
                
            </div>
        </div>
    )
}

export default Login