import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const WishPage = (props) => {
    
    const {id} = useParams(); 
    const [oneWish, setOneWish] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/wish/${id}`)
            .then( (res) => {
                console.log(res.data);
                setOneWish(res.data);
            })
            .catch( (err) => {
                console.log(err);
            });
        }, [id]);
    
        const deleteWish = () => {
        axios.delete(`http://localhost:8000/api/wish/${id}`)
            .then((res) => {
                navigate("/wishlist");
            })
            .catch((err) => {
                console.log(err);
            })
    }
        
    return (
        <div>
            <div className='text-center mb-5 mt-5'>
                    <div id='container'>
                        <h1 className='font text-center '>{oneWish.brand} {oneWish.model}</h1>
                        <h4  className=' font6 mb-5 mt-4'>Price: ${oneWish.price}</h4>
                        <h4 className='font6 mt-5 mb-5'>Thoughts: {oneWish.thoughts}</h4>
                    </div>
                        <div className=' mb-5 mt-5'>
                                
                                <div className='d-flex align-items-center justify-content-md-center mb-2 mt-4'>
                                    <div>
                                        <a target='_blank' rel='noopener noreferrer' href="https://www.sweetwater.com">
                                            <button className="font6 box2 circle-buttons2">Pull the Trigger</button>
                                        </a>
                                    </div>
                                    <div>
                                        <Link to={`/wish/edit/${oneWish._id}`}>
                                            <button className=" font2 button">Edit </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <button className=" font6 box2 circle-buttons2" onClick={deleteWish}>Forget it</button>
                                    </div>
                                </div>
                                <div>
                                    <Link to={'/wishlist'}>
                                        <button className=' font2 button' >back to wish list</button>
                                    </Link>
                                </div>
                            
                        </div>
            </div>
        </div>
    
    );
};
export default WishPage;
