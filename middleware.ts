import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || '';

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    const isAuthPage = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register');
    const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');

    if (isAuthPage) {
        if (token) {
            try {
                await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
                return NextResponse.redirect(new URL('/dashboard', request.url));
            } catch (error) {
                // invalid token, let them proceed to auth page
            }
        }
        return NextResponse.next();
    }

    if (isDashboardPage) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
            const role = payload.role as string;
            const status = payload.status as string;

            // Prevent Kazi from login if status != approved, 
            // but if we are just checking dashboard access, they might need to see a "pending" dashboard.
            // Requirements: "Account status remains 'pending' until approved... After approval, login to dashboard"
            // So if Kazi and pending, maybe redirect to a specific pending page or deny.
            // For now, let's just do role-based routing.

            if (request.nextUrl.pathname.startsWith('/dashboard/admin') && role !== 'Admin') {
                return NextResponse.redirect(new URL('/dashboard', request.url));
            }
            if (request.nextUrl.pathname.startsWith('/dashboard/jela') && role !== 'Jela') {
                return NextResponse.redirect(new URL('/dashboard', request.url));
            }
            if (request.nextUrl.pathname.startsWith('/dashboard/kazi') && role !== 'Kazi') {
                return NextResponse.redirect(new URL('/dashboard', request.url));
            }
            if (request.nextUrl.pathname.startsWith('/dashboard/user') && role !== 'User') {
                return NextResponse.redirect(new URL('/dashboard', request.url));
            }

            // If just /dashboard, redirect to specific dashboard
            if (request.nextUrl.pathname === '/dashboard') {
                // Optionally check if kazi is pending and handle appropriately
                return NextResponse.redirect(new URL(`/dashboard/${role.toLowerCase()}`, request.url));
            }

            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/login', '/register'],
};
