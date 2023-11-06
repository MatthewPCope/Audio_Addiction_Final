import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';  
import { userContext } from "../context/UserContext";

const LotteryList = (props) => {
    
    const [lotteryList, setLotteryList] = useState([]);
    const { currentUser } = useContext(userContext);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/lottery")
        .then((res)=>{
            console.log(res.data);
            setLotteryList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const deleteLottery = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/lottery/${idFromBelow}`)
            .then((res) => {
                const newList = lotteryList.filter((lottery, index) => lottery._id != idFromBelow)
                setLotteryList(newList);
            })
            .catch((err) => {
                console.log(err);
            })
    }
                
    return (
        <>
            <h1 className=' font text-center mb-3 mt-5'>Lottery List</h1>
                <div className='text-center'>
                    <Link to={'/lotteryform'}>
                        <button className=' font2 button' >If I won the lottery</button>
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
                        lotteryList.map((lottery, index)=>{
                            if(lottery.userId == currentUser._id)
                            return (
                                <tr key={lottery._id}>
                                    <td>
                                        <Link to={`/lotterypage/${lottery._id}`}>
                                            <button className="button3">{lottery.brand} </button>
                                        </Link>
                                    </td>
                                    <td >
                                        <Link to={`/lotterypage/${lottery._id}`}>
                                            <button className=" button3">{lottery.model} </button>
                                        </Link>
                                    </td>
                                    <td>${lottery.price}</td>
                                    <td>
                                        <Link to={`/lottery/edit/${lottery._id}`}>
                                            <button className=" button4">Edit </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className='button4' onClick={() => deleteLottery(lottery._id)}>Remove</button>
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
export default LotteryList;

