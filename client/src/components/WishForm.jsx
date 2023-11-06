import React, { useState, useContext } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext'

const WishForm = (props) => {
    const navigate = useNavigate();
    const {currentUser} = useContext(userContext)
    
    const [errors, setErrors] = useState({})
    
    const [wish, setWish] = useState({
        brand:'',
        model:'',
        price:'',
        thoughts:'',
        userId: currentUser._id
    })

    const changeHandler = (e) => {
        setWish({
            ...wish,
            [e.target.name]: e.target.value
        })
    }
    
    
    
    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/wish', wish)
            .then((res)=>{
                setWish({
                    
                    brand:'',
                    model:'',
                    price:'',
                    thoughts:'',
                    userId: currentUser._id
                        })
            
                navigate('/wishlist');
            })
            .catch(err=> {
                setErrors(err.response.data.errors)
            })
                
            

    }
    
    return (
        <>
        <div >
            <h1 className=' font text-center mb-3 mt-5'>You might just get it</h1>
                <h3 className=' font6 text-center mb-3 '>Add to your wish list</h3>
                
                    <div id='container2'>
                        <div className= 'font6 box p-4 my-3'>
                            <form onSubmit={onSubmitHandler}>
                                <div className='form-group mb-4'>
                                    <label htmlFor="brand" className='form-label'>Brand:</label><br/>
                                    <input className='form-control' type="text" value = {wish.brand} id="brand" name = "brand" onChange = {changeHandler}/>
                                    { errors.brand ? 
                                    <p>{errors.brand.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="model" className='form-label'>Model:</label><br/>
                                    <input className='form-control' type="text" id="model" value = {wish.model} name = "model" onChange = {changeHandler}/>
                                    { errors.model ? 
                                    <p>{errors.model.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="price" className='form-label'>Price:</label><br/>
                                    <input className='form-control' type="text" id="price" value = {wish.price} name = "price" onChange = {changeHandler}/>
                                    { errors.price ? 
                                    <p>{errors.price.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='form-group mb-4'>
                                    <label htmlFor="thoughts" className='form-label'>Thoughts: (You can add your thoughts later)</label><br/>
                                    <textarea className='form-control' type="text" id="thoughts" rows="4" cols="50" value = {wish.thoughts} name = "thoughts" onChange = {changeHandler}/>
                                </div>
                                    
                                
                                <div className='d-flex justify-content-evenly'>
                                    <div>
                                        <Link to={'/home'}>
                                            <button className=' font6 button2' >Home</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <button className=' font6 button'>Submit</button>
                                    </div>
                                    <div>
                                        <Link to={'/wishlist'}>
                                            <button className=' font6 button2' >Wishes</button>
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </>
    )
}
export default WishForm;