import React, { useState, useContext } from 'react'
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom'
import {userContext} from '../context/UserContext.jsx'

const Home = (props) => {
    const {currentUser, setCurrentUser} = useContext(userContext)
    const {id} = useParams()

    const navigate = useNavigate()
    
    const logoutUser = () => {
        axios.post('http://localhost:8000/api/logoutUser', {}, {withCredentials:true})
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    
    return (
        <div>
            <h1 className=' font text-center mt-5'>Audio Addiction</h1>
            <h2 className='font7 text-center mt-5'>Hey {currentUser.firstName}, Choose Wisely</h2>
            
            <div>
                
                <div className=' mt-5 mb-5'>
                    <div className=' columns '>
                        <div>
                            <Link to={'/gearform'}>
                                <button className="box3  font7 circle-buttons eguitars"> Add Your Gear</button>
                            </Link>
                        </div>
                    
                        <div>
                            <Link to={'/wishform'}>
                                <button className="box3 font8 circle-buttons aguitars">Careful what you wish for</button>
                            </Link>
                        </div>
                    
                        <div>
                            <Link to={'/lotteryform'}>
                                <button className="box3 font7 circle-buttons basses">If I won the Lottery</button>
                            </Link>
                        </div>
                    </div>
                </div>
                    
                
                <div className=' mt-5 mb-5'>
                    <div className='columns'>
                        <div>
                            <Link to={'/gearlist'}>
                                <button className="box3 font7 circle-buttons microphones">Gear</button>
                            </Link>
                        </div>
                    
                        <div>
                            <Link to={'/wishlist'}>
                                <button className="box3  font7 circle-buttons pedals">Wishes</button>
                            </Link>
                        </div>
                    
                        <div>
                            <Link to={'/lotterylist'}>
                                <button className="box3  font7 circle-buttons amp">Lottery</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className="font6 button" onClick={logoutUser}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
