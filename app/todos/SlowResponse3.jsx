import React from "react";

const SlowResponse = async () => {
    const time = 8000;
    const slowResponse = await fetch(
        `https://procodrr.vercel.app/?sleep=${time}`
    );

    console.log(slowResponse);

    return (
        <div>
            SlowResponse3:
            <div>{JSON.stringify(slowResponse)}</div>
        </div>
    );
};

export default SlowResponse;
