import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';  
import { userContext } from "../context/UserContext";


const GearList = (props) => {
    
    const [gearList, setGearList] = useState([]);
    const { currentUser } = useContext(userContext);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/gear")
        .then((res)=>{
            console.log(res.data);
            setGearList(res.data);
            
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const deleteGear = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/gear/${idFromBelow}`)
            .then((res) => {
                const newList = gearList.filter((gear, index) => gear._id != idFromBelow)
                setGearList(newList);
                
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <>
            <h1 className='font text-center mb-3 mt-5'>Gear I actually own</h1>
                <div className='text-center'>
                    <Link to={'/gearform'}>
                        <button className='font2 button'>Add Gear</button>
                    </Link>
                </div>
                <div id="container2" className='font6'>
                    <table className=" table2 w-75 border-dark border-4 text-center table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Brand</th>
                                <th scope="col">Model</th>
                                <th scope="col" >Price</th>
                                <th scope="col" colSpan="2">Actions Available</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        gearList.map((gear, index)=>{
                            if(gear.userId == currentUser._id)
                            return(
                                <tr key={gear._id}>
                                    <td>
                                        <Link to={`/gear/${gear._id}`}>
                                            <button  className=" button3">{gear.brand} </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/gear/${gear._id}`}>
                                            <button  className=" button3">{gear.model} </button>
                                        </Link>
                                    </td>
                                    <td>${gear.price}</td>
                                    <td>
                                        <Link to={`/gear/edit/${gear._id}`}>
                                            <button className=" button4">Edit </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className='button4' onClick={() => deleteGear(gear._id)}>Sold It</button>
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
export default GearList;
