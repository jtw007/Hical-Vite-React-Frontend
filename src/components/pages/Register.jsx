import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate } from 'react-router-dom'

const Register = ({ currentUser, setCurrentUser }) => {
    //state for the controlled form
    const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
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
        <div id='register-container' style={{width: '100%', height: '100%', position: 'relative', background: 'white'}}>

            <div style={{width: 216.66, height: 17.83, left: 103, top: 34, position: 'relative', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.20, wordWrap: 'break-word'}}>Create Account</div>

			

			<form onSubmit={handleSubmit} id='register-form'>
                
            {/* <div style={{width: 256, height: 55, left: 83, top: 83.56, position: 'absolute', borderRadius: 40, border: '1px rgba(95, 99, 104, 0.50) solid'}} />
            <div style={{width: 256, height: 55, left: 83, top: 238.56, position: 'absolute', borderRadius: 40, border: '1px rgba(95, 99, 104, 0.50) solid'}} />
            <div style={{width: 256, height: 55, left: 83, top: 315.56, position: 'absolute', borderRadius: 40, border: '1px rgba(95, 99, 104, 0.50) solid'}} />
            <div style={{width: 256, height: 55, left: 83, top: 392.56, position: 'absolute', borderRadius: 40, border: '1px rgba(95, 99, 104, 0.50) solid'}} /> */}
                <div style={{ width: 68, height: 18, left: 115, top: 75, position: 'relative'}}>
                    <input 
                        style={{width: 256, height: 55, left: 83, top: 83.56, position: 'relative', borderRadius: 40, border: '1px rgba(95, 99, 104, 0.50) solid'}}
                        type="text"
                        id="name"
                        placeholder=''
                        onChange={e => setName(e.target.value)}
                        value={name}
                        required
                    />
                    <div style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.20, wordWrap: 'break-word'}}>Full Name</div>
                </div>
				
                <div style={{width: 89, height: 18, left: 115, top: 230, position: 'relative'}}>
                    <input 
                        style={{width: 256, height: 55, left: 83, top: 83.56, position: 'relative', borderRadius: 40, border: '1px rgba(95, 99, 104, 0.50) solid'}}
                        type="email"
                        id="email"
                        placeholder=''
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <div style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.20, wordWrap: 'break-word'}}>Email Address</div>
                </div>
                    

                <div style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.20, wordWrap: 'break-word'}}>Phone Number</div>
				<input 
                    style={{width: 256, height: 55, left: 83, top: 83.56, position: 'relative', borderRadius: 40, border: '1px rgba(95, 99, 104, 0.50) solid'}}
					type="number"
					id="phoneNumber"
					placeholder=''
					onChange={e => setPhoneNumber(e.target.value)}
					value={phoneNumber}
					required
				/>

                <div style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.20, wordWrap: 'break-word'}}>Password</div>
				<input 
                    style={{width: 256, height: 55, left: 83, top: 83.56, position: 'relative', borderRadius: 40, border: '1px rgba(95, 99, 104, 0.50) solid'}}
					type="password"
					id="password"
					placeholder=''
					onChange={e => setPassword(e.target.value)}
					value={password}
					required
				/>

				<button 
                    type="submit" 
                    id='register-btn'
                    style={{width: 256, height: 55, left: 83, top: 161.56, position: 'relative', borderRadius: 40, border: '1px rgba(95, 99, 104, 0.50) solid'}}
                >Create Account</button>

                {/* <div style={{width: '100%', height: '100%', textAlign: 'center'}}>
                    <span style={{color: '#5F6368', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.20, wordWrap: 'break-word'}}>Already have an account?</span>
                    <span style={{color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.20, wordWrap: 'break-word'}}> </span>
                    <span style={{color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 0.20, wordWrap: 'break-word'}}>Login</span>
                </div> */}

			</form>

            {/* <div style={{width: 295.02, height: 17.83, left: 59, top: 568, position: 'relative', textAlign: 'center'}}>
                <span style={{color: '#5F6368', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.20, wordWrap: 'break-word'}}>Already have an account?</span>
                <span style={{color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.20, wordWrap: 'break-word'}}></span>
                <span style={{color: 'black', fontSize: 12, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 0.20, wordWrap: 'break-word'}}>Login</span>
            </div> */}

            {/* <div style={{width: 256, height: 54, left: 83, top: 648, position: 'relative', borderRadius: 40, border: '1px rgba(95, 99, 104, 0.50) solid'}} />
            <div style={{width: 216.66, height: 17.83, left: 128, top: 666, position: 'relative', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.20, wordWrap: 'break-word'}}>Continue with Google</div>
            <div style={{width: 252, height: 0, left: 87, top: 608, position: 'relative', border: '1.50px #AFB1B3 solid'}}></div>
            <div style={{width: 26, height: 26, left: 106.62, top: 675, position: 'relative', transform: 'rotate(-45deg)', transformOrigin: '0 0', background: '#D9D9D9', borderRadius: 9999}} />
            <div style={{width: 26, height: 0, left: 116.51, top: 684.90, position: 'relative', transform: 'rotate(-45deg)', transformOrigin: '0 0', border: '0.50px black solid'}}></div>
            <div style={{width: 26, height: 0, left: 115.81, top: 665.81, position: 'relative', transform: 'rotate(45deg)', transformOrigin: '0 0', border: '0.50px black solid'}}></div> */}
            
		</div>
    )
}

export default Register