import React from 'react';

function NavBar() {
    return (
        <div data-testid="navbar">
            <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 mx-auto h1 text-center">Freetos - free photos</span>
            </div>
            </nav>
        </div>
    )
}

export default NavBar;
