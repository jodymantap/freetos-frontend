import React, {useState, useEffect} from 'react';
import PhotoCard from './components/PhotoCard';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

function Mainpage() {
    

    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div>
                <SearchBar/>
            </div>
            <div>
                <PhotoCard/>
            </div>
        </div>
    )
}

export default Mainpage;
