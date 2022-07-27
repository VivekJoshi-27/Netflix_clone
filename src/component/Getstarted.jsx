import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Getstarted.css';

const Getstarted = () => {
    const navigate = useNavigate();

    return (
        <>
            <div class="inline">
                <input type="email" placeholder="Email address" />
                <button type='submit' onClick={()=>navigate("/signup")}><a href=""></a> Get Started </button>
            </div>
        </>
    );
};

export default Getstarted;