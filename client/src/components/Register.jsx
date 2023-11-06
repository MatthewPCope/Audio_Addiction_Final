import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { userContext} from '../context/UserContext.jsx'


const Register = (props) => {
    const {currentUser, setCurrentUser} = useContext(userContext)
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const [errors, setErrors] = useState({});
    
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
        
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/registerUser', user, {withCredentials:true})
            .then((res) => {
                setCurrentUser(res.data)
                // localStorage.setItem('currentUser', JSON.stringify(res.data))
                
                navigate('/home');
                })
                .catch((err) => {
                    console.log(err)
                setErrors(err.response.data.error.errors)
                })
    }
    return (
        <div >
            <div >
            <h1 className='font text-center mb-4 mt-5'>Register</h1>
            
                
                    <div id = "container2" className= " ">
                        <div className= ' font6 box p-4 my-3'>
                            <form onSubmit={onSubmitHandler}>
                                <div className=' form-group mb-4'>
                                    <label className='form-label'>First Name:</label><br/>
                                    <input className='form-control' type="text" value = {user.firstName} name = "firstName" onChange = {changeHandler}/>
                                    { errors.firstName ? 
                                    <p>{errors.firstName.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='form-group mb-4'>
                                    <label className='form-label'>Last Name:</label><br/>
                                    <input className='form-control' rows="4" cols="10" type="text" value = {user.lastName} name = "lastName" onChange = {changeHandler}/>
                                    { errors.lastName ? 
                                    <p>{errors.lastName.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='form-group mb-4'>
                                    <label className='form-label'>Email:</label><br/>
                                    <input className='form-control' type="email" value = {user.email} name = "email" onChange = {changeHandler}/>
                                    { errors.email ? 
                                    <p>{errors.email.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='form-group mb-4'>
                                    <label className='form-label'>Password:</label><br/>
                                    <input className='form-control' type="password" value = {user.password} name = "password" onChange = {changeHandler}/>
                                    { errors.password ? 
                                    <p>{errors.password.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='form-group mb-4'>
                                    <label className='form-label'>Confirm Password:</label><br/>
                                    <input className='form-control' type="password" value = {user.confirmPassword} name = "confirmPassword" onChange = {changeHandler}/>
                                    { errors.confirmPassword ? 
                                    <p>{errors.confirmPassword.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='text-center'>
                                    <button className='button'>Let's Go!</button>
                                </div>
                                <div className='text-center mt-3'>
                                    <Link to={'/login'}>
                                        <button className='  button3' >Already Have an Account?</button>
                                    </Link>
                                </div>
                                
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Register