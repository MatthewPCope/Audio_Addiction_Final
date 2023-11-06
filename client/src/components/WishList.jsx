import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';  
import { userContext } from "../context/UserContext";

const WishList = (props) => {
    
    const [wishList, setWishList] = useState([]);
    const { currentUser } = useContext(userContext);
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/wish")
        .then((res)=>{
            console.log(res.data);
            setWishList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const deleteWish = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/wish/${idFromBelow}`)
            .then((res) => {
                const newList = wishList.filter((wish, index) => wish._id != idFromBelow)
                setWishList(newList);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <h1 className='font text-center mb-3 mt-5'>Wish List</h1>
                <div className='text-center'>
                    <Link to={'/wishform'}>
                        <button className=' font2 button' >careful what you wish for</button>
                    </Link>
                </div>
                <div id="container2" className='font6' >
                    <table className=" table2 w-75 border-dark border-4 text-center table-bordered ">
                        <thead >
                            <tr >
                                <th scope="col">Brand</th>
                                <th scope="col">Model</th>
                                <th scope="col" >Price</th>
                                <th scope="col" colSpan="2">Actions Available</th>
                            </tr>
                        </thead>
                        <tbody >
                        {
                        wishList.map((wish, index)=>{
                            if(wish.userId == currentUser._id)
                            return (
                                <tr key={wish._id}>
                                    <td>
                                        <Link  to={`/wishpage/${wish._id}`}>
                                            <button className=" button3">{wish.brand} </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link  to={`/wishpage/${wish._id}`}>
                                            <button className=" button3">{wish.model} </button>
                                        </Link>
                                    </td>
                                    <td>${wish.price}</td>
                                    <td>
                                        <Link to={`/wish/edit/${wish._id}`}>
                                            <button className=" button4">Edit </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className='button4' onClick={() => deleteWish(wish._id)}>Remove</button>
                                    </td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
                <div className='text-center mt-3'>
                    <Link to={'/home'}>
                        <button className='font2 button' >Home</button>
                    </Link>
                </div>
        </>
)}
export default WishList;
