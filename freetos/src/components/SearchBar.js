import React from 'react';
import Button from './Button';

function SearchBar() {
    return (
        <div className="container mx-auto my-4 d-flex">
            <div onClick={() => { localStorage.setItem("tag","all");
            setTimeout(window.location.reload(), 3000 )}}>
                <Button label="All"></Button>
            </div>
            <div onClick={() => { localStorage.setItem("tag","cats")
            setTimeout(window.location.reload(), 3000 )}}>
                <Button label="Cats"></Button>
            </div>
            <div onClick={() => { localStorage.setItem("tag","people")
            setTimeout(window.location.reload(), 3000 )}}>
                <Button label="People"></Button>
            </div>
            <div onClick={() => { localStorage.setItem("tag","flowers")
            setTimeout(window.location.reload(), 3000 )}}>
                <Button label="Flowers"></Button>
            </div>
        </div>
    )
}

export default SearchBar;
