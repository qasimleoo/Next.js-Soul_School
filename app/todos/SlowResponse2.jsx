import React from "react";

const SlowResponse = async () => {
    const time = 5000;
    const slowResponse2 = await fetch(
        `https://procodrr.vercel.app/?sleep=${time}`
    );

    console.log(slowResponse2);

    return (
        <div>
            SlowResponse2:
            <div>{JSON.stringify(slowResponse2)}</div>
        </div>
    );
};

export default SlowResponse;
