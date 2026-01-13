"use client";
import { useState } from "react";

export default function Home() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    async function scheduleMeeting() {
        setStatus("Scheduling...");
        await fetch("/api/schedule", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                startTime: "2026-01-07T10:00:00",
                endTime: "2026-01-07T10:30:00",
            }),
        });
        setStatus("Invite sent");
    }

    return (
        <div>
            <h2>Schedule a Meeting</h2>
            <input
                placeholder="Gmail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={scheduleMeeting}>Schedule</button>
            <p>{status}</p>
        </div>
    );
}
