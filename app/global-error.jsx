"use client";

import "./globals.css";

const error = () => {
    return (
        <html lang="en">
            <body>
                <div>
                    <h1>Root Error Handler</h1>
                    <p>Something went wrong</p>

                    <div>
                        <button
                            onClick={() => {
                                window.location.reload();
                            }}
                        >
                            Click to reload
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default error;
