import React, { useState } from 'react'
// import axios from 'axios';
import {Link} from 'react-router-dom'

const Main = (props) => {

    
    
    return (
        <div>
            <h1 className=' font text-center mt-5'>Audio Addiction</h1>
            <h5 className='font6 text-center mb-3'> Have a lot of gear?</h5>
            <h5 className='font6 text-center mb-3'> Keep track of it here.</h5>
            <div className=' d-flex justify-content-center'>
                <div className=' mt-5 mb-5 me-5'>
                    <div className='columns1'>
                        <Link to={'/register'}>
                            <button className="box3 font9 circle-buttons4"> <span>Register</span></button>
                        </Link>
                    </div>
                </div> 
                <div className=' mt-5 mb-5 ms-5'>
                    <div className='columns1'>
                        <Link to={'/login'}>
                            <button className="box3 font9 circle-buttons3"><span>Login</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
