import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const EditGear = (props) => {
    const { id } = useParams();
    const [gear, setGear] = useState({
        brand:'',
        model:'',
        price:'',
        thoughts:''
        
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/gear/${id}`)
            .then((res) => {
                setGear(res.data)
                })
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setGear({
            ...gear,
            [e.target.name]: e.target.value
        })
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/gear/${id}`,gear)
            .then((res) => {
                console.log(res.data);
                navigate(`/gearlist`);
            })
            .catch((err) => {
                console.log(err)
            setErrors(err.response.data.errors)
            })
            
    }
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
            <h1 className="font text-center mt-5 mb-2">Edit your Gear</h1>
            <div id = "container2">
                <div className= 'font6 box p-4 my-3'>
                    <form onSubmit={submitHandler}>
                        <div className='form-group mb-4'>
                            <label className='form-label'>Brand:</label><br/>
                            <input className='form-control' type="text" value = {gear.brand} name = "brand" onChange = {changeHandler}/>
                            { errors.brand ? 
                            <p>{errors.brand.message}</p>
                            : null
                            }
                        </div>
                        <div className='form-group mb-4'>
                            <label className='form-label'>Model:</label><br/>
                            <input className='form-control' type="text" value = {gear.model} name = "model" onChange = {changeHandler}/>
                            { errors.model ? 
                            <p>{errors.model.message}</p>
                            : null
                            }
                        </div>
                        <div className='form-group mb-4'>
                            <label htmlFor="price" className='form-label'>Price:</label><br/>
                            <input className='form-control' type="text" id="price" value = {gear.price} name = "price" onChange = {changeHandler}/>
                            { errors.price ? 
                            <p>{errors.price.message}</p>
                            : null
                            }
                        </div>
                        <div className='form-group mb-4'>
                            <label htmlFor="thoughts" className='form-label'>Thoughts:</label><br/>
                            <textarea className='form-control' type="text" id="thoughts" rows="4" cols="50" value = {gear.thoughts} name = "thoughts" onChange = {changeHandler}/>
                        </div>
                        <div className='d-flex justify-content-evenly'>
                        <div>
                            <Link to={'/gearlist'}>
                                <button className=' font6 button2' >View Gear</button>
                            </Link>
                        </div>
                        <div className=''>
                            <button className='button2'>Submit</button>
                        </div>
                        </div>
                    </form>
                        <div className=' text-center'>
                            <button className=' button' onClick={deleteGear}>Sold It</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default EditGear;