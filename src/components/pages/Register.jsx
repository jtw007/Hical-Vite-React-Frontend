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
                password 
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

    //conditionally render a navigate component

    return (
        <div>Register</div>
    )
}

export default Register