import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const EditLottery = (props) => {
    const { id } = useParams(); 
    const [lottery, setLottery] = useState({
        brand:'',
        model:'',
        price:'',
        thoughts:''
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    
        
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/lottery/${id}`)
            .then((res) => {
                setLottery(res.data)
            })
            .catch(err => console.log(err))
    }, [])
    
    const changeHandler = (e) => {
        setLottery({
            ...lottery,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/lottery/${id}`, lottery)
            .then((res) => {
                console.log(res.data);
                navigate(`/lotterylist`);
            })
            .catch((err) => {
                setErrors(err.response.data.errors)
            })
            
    }
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
            <h1 className="font text-center mt-5 mb-2">Edit your Lottery Entry</h1>
            <div id = "container2">
                <div className= 'font6 box p-4 my-3'>
                    <form onSubmit={submitHandler}>
                        <div className='form-group mb-4'>
                            <label htmlFor="brand" className='form-label'>Brand:</label><br/>
                            <input className='form-control' type="text" value = {lottery.brand} id="brand" name = "brand" onChange = {changeHandler}/>
                            { errors.brand ? 
                            <p>{errors.brand.message}</p>
                            : null
                            }
                        </div>
                        <div className='form-group mb-4'>
                            <label htmlFor="model" className='form-label'>Model:</label><br/>
                            <input className='form-control' type="text" value = {lottery.model} id="model" name = "model" onChange = {changeHandler}/>
                            { errors.model ? 
                            <p>{errors.model.message}</p>
                            : null
                            }
                        </div>
                        <div className='form-group mb-4'>
                            <label htmlFor="price" className='form-label'>Price:</label><br/>
                            <input className='form-control' type="text" id="price" value = {lottery.price} name = "price" onChange = {changeHandler}/>
                            { errors.price ? 
                            <p>{errors.price.message}</p>
                            : null
                            }
                        </div>
                        <div className='form-group mb-4'>
                            <label htmlFor="thoughts" className='form-label'>Thoughts:</label><br/>
                            <textarea className='form-control' type="text" id="thoughts" rows="4" cols="50" value = {lottery.thoughts} name = "thoughts" onChange = {changeHandler}/>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                        <div>
                            <Link to={'/lotterylist'}>
                                <button className=' font6 button2' >View List</button>
                            </Link>
                        </div>
                        <div className=''>
                            <button className='button2'>Submit</button>
                        </div>
                        
                        </div>
                    </form>
                    <div className=' text-center'>
                            <button className=' button' onClick={deleteLottery}>Remove</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default EditLottery;
