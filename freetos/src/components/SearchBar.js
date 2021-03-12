import React from 'react';
import Button from './Button';

function SearchBar() {
    return (
        <div className="container mx-auto my-4 d-flex">
            <Button label="All"></Button>
            <Button label="Cats"></Button>
            <Button label="People"></Button>
            <Button label="Flowers"></Button>
        </div>
    )
}

export default SearchBar;
