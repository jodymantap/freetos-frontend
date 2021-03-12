import React from 'react';

function Button({label}) {
    return (
        <div>
            <button data-testid="button" className="btn btn-dark me-2" type="submit">
                {label}
            </button>
        </div>
    )
}

export default Button;
