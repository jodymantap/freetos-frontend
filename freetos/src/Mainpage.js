import React, {useState, useEffect} from 'react';
import PhotoCard from './components/PhotoCard';
import NavBar from './components/NavBar';

function Mainpage() {
    

    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <PhotoCard/>
            </div>
        </div>
    )
}

export default Mainpage;
