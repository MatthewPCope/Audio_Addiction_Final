import React, { useState } from 'react'
// import axios from 'axios';
import {Link} from 'react-router-dom'

const Main = (props) => {

    
    
    return (
        <div>
            <h1 className=' font text-center mt-5'>My Audio Addiction</h1>
            <h5 className='text-center'> Have a lot of gear?</h5>
            <h5 className='text-center'> Keep track of it here.</h5>
            <div className=' d-flex justify-content-evenly'>
                <div className=' mt-5 mb-5'>
                    <div className='columns1'>
                        <Link to={'/register'}>
                            <button className="box3 font7 circle-buttons"> For those about to Rock</button>
                        </Link>
                    </div>
                </div> 
                <div className=' mt-5 mb-5'>
                    <div className='columns1'>
                        <Link to={'/login'}>
                            <button className="box3 font7 circle-buttons">We Salute You</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
