"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ error, reset }) {
    console.error(error);
    const router = useRouter();

    return (
        <div>
            <h2>Something went wrong</h2>
            <p>{error.message}</p>

            {/* not recommended on UI */}

            {/* {error.digest && <p>Digest: {error.digest}</p>} */}

            <button
                className="border-1 cursor-pointer"
                onClick={() => {
                    startTransition(() => {
                        router.refresh();
                        reset();
                    });
                }}
            >
                Try again
            </button>
        </div>
    );
}
