import React from 'react';

function Button({label}) {
    return (
        <div data-testid="button" className="btn btn-dark me-2">
            {label}
        </div>
    )
}

export default Button;
