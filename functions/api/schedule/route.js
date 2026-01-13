import { NextResponse } from "next/server";
import axios from "axios";
import { getAccessToken } from "@/app/lib/graphAuth";

export async function POST(req) {
    const { email, startTime, endTime } = await req.json();

    const token = await getAccessToken();

    const event = {
        subject: "Scheduled Meeting",
        body: {
            contentType: "HTML",
            content: "You have been invited to a Teams meeting.",
        },
        start: { dateTime: startTime, timeZone: "UTC" },
        end: { dateTime: endTime, timeZone: "UTC" },
        attendees: [{ emailAddress: { address: email }, type: "required" }],
        isOnlineMeeting: true,
        onlineMeetingProvider: "teamsForBusiness",
    };

    try {
        await axios.post(
            `https://graph.microsoft.com/v1.0/users/${process.env.OUTLOOK_ORGANIZER_EMAIL}/events`,
            event,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        return NextResponse.json({
            success: true,
            message: `Invite sent to ${email} and organizer.`,
        });
    } catch (err) {
        console.error(err.response?.data || err.message);
        return NextResponse.json({
            success: false,
            message: "Failed to schedule meeting.",
        });
    }
}
