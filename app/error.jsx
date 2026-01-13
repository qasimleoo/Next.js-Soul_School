"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const error = ({ reset, error }) => {
    const router = useRouter;

    return (
        <div>
            <h1>Root Error Handler</h1>
            <p>Something went wrong</p>

            <div>Error: {error.message}</div>
            <div>
                <button
                    onClick={() => {
                        startTransition(() => {
                            reset();
                            router.refresh();
                        });
                    }}
                >
                    Click to reload
                </button>
            </div>
        </div>
    );
};

export default error;
