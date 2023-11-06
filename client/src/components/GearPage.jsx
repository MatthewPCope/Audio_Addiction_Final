import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const GearPage = (props) => {
    
    const {id} = useParams(); 
    const [oneGear, setOneGear] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/gear/${id}`)
            .then( (res) => {
                console.log(res.data);
                setOneGear(res.data);
            })
            .catch( (err) => {
                console.log(err);
            });
        }, [id]);
    
        const deleteGear = () => {
        axios.delete(`http://localhost:8000/api/gear/${id}`)
            .then((res) => {
                navigate("/gearlist");
            })
            .catch((err) => {
                console.log(err);
            })
    }
        
    return (
        <div>
            <div className='text-center mb-5 mt-5'>
                    <div id='container'>
                        <h1 className='font text-center '>{oneGear.brand} {oneGear.model}</h1>
                        <h4  className=' mb-5 mt-4 font6'>Bought it for: ${oneGear.price}</h4>
                        <h4 className='font6 mt-5 mb-5'>Thoughts: {oneGear.thoughts}</h4>
                    </div>
                        <div className=' mb-5 mt-5'>
                                
                                <div className='d-flex align-items-center justify-content-md-center mb-2 mt-4'>
                                    <div>
                                        <a target='_blank' rel='noopener noreferrer' href="https://www.reverb.com">
                                            <button className=" font3 box2 circle-buttons2">Sell</button>
                                        </a>
                                    </div>
                                    <div>
                                        <Link to={`/gear/edit/${oneGear._id}`}>
                                            <button className=" font2 button">Edit </button>
                                        </Link>
                                    </div>
                                    <div>
                                        <button className=" font3 box2 circle-buttons2" onClick={deleteGear}>Sold</button>
                                    </div>
                                </div>
                                <div>
                                    <Link to={'/gearlist'}>
                                        <button className=' font2 button' >back to gear</button>
                                    </Link>
                                </div>
                            
                        </div>
            </div>
        </div>
    
    );
};
export default GearPage;
