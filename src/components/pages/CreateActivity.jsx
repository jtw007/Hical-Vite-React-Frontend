import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Navigate } from "react-router-dom"
import jwt_decode from 'jwt-decode'

const CreateActivity = () => {
    //state that holds value user has typed
    const [form, setForm] = useState({
        // initialize all values as empty strings because this is a new activity
        title: '',
        participants: '',
        user: '',
    })

    return (
        <div>CreateActivity</div>
    )
}

export default CreateActivity