import { NextResponse } from "next/server";
import { SESSION_COOKIE_NAME } from "@/lib/auth/session";

export async function POST() {
	const res = NextResponse.json({ ok: true });
	res.cookies.set({
		name: SESSION_COOKIE_NAME,
		value: "",
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
		maxAge: 0,
	});
	return res;
}


