import { Suspense } from "react";
import SlowResponse from "./SlowResponse";
import SlowResponse2 from "./SlowResponse2";
import SlowResponse3 from "./SlowResponse3";
import Todos from "./Todos";

const page = async () => {
    // console.log(fetch.constructor); // returns a AsyncFunction unlike simple nodejs/js where it is Function only
    // console.log(fetch); // returns a fetch _nextPatched and some more unlike simple nodejs/js where it is fetch only

    // console.log(todos);
    // here we can call db directly as server side code doesn't go to client

    // https://procodrr.vercel.app/?sleep=2000

    return (
        <div>
            {/* <Suspense fallback="Loading..."> */}

            <Suspense fallback="Loading Slow 1...">
                <SlowResponse />
            </Suspense>
            <br />
            <br />
            <Suspense fallback="Loading Slow 2...">
                <SlowResponse2 />
            </Suspense>
            <br />
            <br />
            <Suspense fallback="Loading Slow 3...">
                <SlowResponse3 />
            </Suspense>
            <br />
            <br />
            {/* </Suspense> */}
            <br />

            <Suspense fallback="Loading Todos list...">
                <Todos />
            </Suspense>
        </div>
    );
};

export default page;
