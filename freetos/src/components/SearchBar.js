import React from 'react';

function SearchBar() {
    return (
        <div className="container mx-auto my-4">
            <form>
            <div class="input-group">
                <input type="text" className="form-control" placeholder="Search for a tag" aria-label="Dollar amount (with dot and two decimal places)"/>
                <button className="btn-dark">Search</button>
            </div>
            </form>
        </div>
    )
}

export default SearchBar;
