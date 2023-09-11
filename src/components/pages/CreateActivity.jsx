import axios from 'axios'
import { useState, useRef } from 'react'
import { useNavigate, Navigate } from "react-router-dom"
import jwt_decode from 'jwt-decode'
import { usePlacesWidget } from 'react-google-autocomplete'


const CreateActivity = () => { 
    // const api_key = import.meta.env.VITE_API_KEY
    // const apiUrl=`https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY}&libraries=places`

    // const { ref, autocompleteRef } = usePlacesWidget({
    //     apiKey:api_key, 
    //     apiUrl:apiUrl,
    //     onPlaceSelected: (place) => {
    //         console.log(place)
    //     }
    // })
    
    //state that holds value user has typed
    const [form, setForm] = useState({
        // initialize all values as empty strings because this is a new activity
        title: '',
        participants: '',
        user: '',
    })
    const [activity, setActivity] = useState('')
    const [description, setDescription] = useState('')
    // invoke useNavigate hook to get a navigate function to use
    const navigate = useNavigate()

    //localStorage = web storage object that allows JS sites and apps to keep key-value pairs in web browser with no expiration date; enables developers to store and retrieve data in the browser - not good practice since data will be lost if the user clears cache
        //in this case, we are storing the jwt 
    // const token = localStorage.getItem('jwt')
    // if(!token) {
    //     return <Navigate to="/login" />
    // }
    // decodes the token
    // const decoded = jwt_decode(token)
    // console.log(decoded.id)
    //submit handler function that posts the form data from state to the backend
    const handleSubmit = (e) => {
        e.preventDefault()
    }
        
    
    return (
        <div className='activity-container'>
            <div id='activity-message'>
                <p style={{width: 257, height: 18, left: 46.13, top: 48.54, position: 'absolute', color: '#4B444D', fontSize: 24, fontFamily: 'Roboto', fontWeight: '400', letterSpacing: 0.20, wordWrap: 'break-word'}}>Create New Activity</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className='form-container'>

                    <div className=''>

                        <label htmlFor='activity-title'>Activity Title</label>
                        <input 
                            type='text'
                            id='name'
                            placeholder='Activity Title'
                            onChange={e => setActivity(e.target.value)}
                            value={activity}
                            required
                        />

                        <label htmlFor='address'>Address</label>
                        <input 
                            // autoComplete={autocompleteRef}
                            // ref={ref}
                            id="address" 
                            placeholder="Address" 
                            type="text"
                        />
                        <input 
                            // autoComplete={autocompleteRef}
                            // ref={ref}
                            id="city" 
                            placeholder="City" 
                            type="text"
                        />
                        <input 
                            // autoComplete={autocompleteRef}
                            // ref={ref}
                            id="state" 
                            placeholder="State" 
                            type="text"
                        />
                        <input 
                            // autoComplete={autocompleteRef}
                            // ref={ref}
                            id="country" 
                            placeholder="Country" 
                            type="text"
                        />
                        <input 
                            // autoComplete={autocompleteRef}
                            // ref={ref}
                            id="postcode" 
                            placeholder="Postcode" 
                            type="text"
                        />

                        <label htmlFor='description'>Description</label>
                        <textarea 
                            type='text' 
                            rows={5}
                            id='description'
                            placeholder='Add Description'
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                        />

                    </div>

                    <button>Create</button>

                </div>
            </form>
        </div>
    )
}

export default CreateActivity