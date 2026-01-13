import React from "react";

const SlowResponse = async () => {
    let time = 2000;
    const slowResponse = await fetch(
        `https://procodrr.vercel.app/?sleep=${time}`
    );
    console.log(slowResponse);

    return (
        <div>
            SlowResponse1:
            <div>{JSON.stringify(slowResponse)}</div>
        </div>
    );
};

export default SlowResponse;
