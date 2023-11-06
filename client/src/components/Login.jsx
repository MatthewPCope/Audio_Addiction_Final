import React, {useContext, useState} from 'react'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom'
import {userContext} from '../context/UserContext.jsx'

const Login = (props) => {
    const {currentUser, setCurrentUser} = useContext(userContext)
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email:"",
        password:""
        
    })
    
    const [errors, setErrors] = useState();
    
    

    
    const changeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]:e.target.value})
        
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/loginUser', userLogin, {withCredentials:true})
            .then((res) => {
                setCurrentUser(res.data)
                navigate ('/home')
                // localStorage.setItem('currentUser', JSON.stringify(res.data))
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.message)
            })
            // localStorage.setItem('userLogin', JSON.stringify(currentUser.firstName))    
    }
                


    return (
    <div>
        <h1 className='font text-center mb-5 mt-5'>Login</h1>
            <div id = "container2" className="">
                <div className= 'font6 box p-4 my-3 '>
                    <form onSubmit={onSubmitHandler}>
                        <div className='form-group mb-4'>
                            <label htmlFor="email" className='form-label'>Email:</label><br/>
                            
                            <input className='form-control' type="email" value = {userLogin.email} id="email" name = "email" onChange = {changeHandler}/>
                            { errors ? 
                            <p>{errors}</p>
                            : null
                            }
                        </div>
                        <div className='form-group mb-4'>
                            <label htmlFor="password" className='form-label'>Password:</label><br/>
                            <input className='form-control' type="password" value = {userLogin.password} id="password" name = "password" onChange = {changeHandler}/>
                            { errors ? 
                            <p>{errors}</p>
                            : null
                            }
                        </div>
                        <div className='text-center'>
                        <button className='button'>I'm Back</button>
                        </div>
                        
                        <div className='text-center mt-3'>
                            <Link to={'/register'}>
                                <button className=' font2 button' >Don't Have an Account?</button>
                            </Link>
                        </div>
                        
                    </form>
                </div>
        </div></div>
)
}

export default Login