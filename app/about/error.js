"use client";
const Error = ({ error, reset }) => {
    return (
        <div>
            <p>Something went wrong</p>
            <p>{error.message}</p>  
            <button
                onClick={() => {
                    reset();
                }}
            >
                Click to Reset
            </button>
        </div>
    );
};

export default Error;
