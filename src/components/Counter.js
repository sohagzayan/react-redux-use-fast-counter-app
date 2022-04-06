import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from '../redux/action/index';
const Counter = () => {

    const dispatch = useDispatch()
    const incDecNumberState = useSelector((state)=> state.incDecNumber)
    return (
        <div className='flex items-center justify-center h-screen'>
            <button onClick={()=> dispatch(decNumber())} className='bg-green-500 text-white py-2 px-3 text-xl font-semibold rounded-md'>Decrement</button>
                <h3 className='bg-white shadow-md w-20 h-20 flex items-center justify-center text-3xl font-bold text-green-400 rounded-full mx-3 '>{incDecNumberState}</h3>
            <button onClick={()=> dispatch(incNumber())} className='bg-green-500 text-white py-2 px-3 text-xl font-semibold rounded-md'>Increment</button>
        </div>
    );
};

export default Counter;