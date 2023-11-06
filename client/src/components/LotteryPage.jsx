import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const LotteryPage = (props) => {
    
    const {id} = useParams(); 
    const [oneLottery, setOneLottery] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/lottery/${id}`)
            .then( (res) => {
                console.log(res.data);
                setOneLottery(res.data);
            })
            .catch( (err) => {
                console.log(err);
            });
        }, [id]);
    
        const deleteLottery = () => {
        axios.delete(`http://localhost:8000/api/lottery/${id}`)
            .then((res) => {
                navigate("/lotterylist");
            })
            .catch((err) => {
                console.log(err);
            })
    }
        
    return (
        <div>
            <div className='text-center mb-3 mt-5'>
                    <div id='container'>
                        <h1 className='font text-center '>{oneLottery.brand} {oneLottery.model}</h1>
                        <h4  className=' font6 mb-5 mt-4'>Price: ${oneLottery.price}</h4>
                        <h4 className='font6 mt-5 mb-5'>Thoughts: {oneLottery.thoughts}</h4>
                    </div>
                        <div className='  mt-5'>
                                
                                <div className='d-flex align-items-center justify-content-md-center mb-2 mt-4'>
                                    <div>
                                        <a target='_blank' rel='noopener noreferrer' href="https://www.sweetwater.com">
                                            <button className=" font6 box2 circle-buttons2">Pull the Trigger</button>
                                        </a>
                                    </div>
                                    <div>
                                        <Link to={`/lottery/edit/${oneLottery._id}`}>
                                            <button className=" font2 button">Edit </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <button className=" font6 box2 circle-buttons2" onClick={deleteLottery}>I'm Over It</button>
                                    </div>
                                </div>
                                <div>
                                    <Link to={'/lotterylist'}>
                                        <button className=' font2 button' >back to lottery list</button>
                                    </Link>
                                </div>
                            
                        </div>
            </div>
            <div className='text-center '>
                    <Link to={'/home'}>
                        <button className='font6 button3' >Home</button>
                    </Link>
                </div>
        </div>
    
    );
};
export default LotteryPage;
