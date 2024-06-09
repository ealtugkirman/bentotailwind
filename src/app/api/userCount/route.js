import { NextResponse } from 'next/server';

export async function GET() {
    const CLERK_API_KEY = process.env.CLERK_SECRET_KEY;

    try {
        const response = await fetch('https://api.clerk.dev/v1/users', {
            headers: {
                'Authorization': `Bearer ${CLERK_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Kullanıcı sayısı çekilemedi');
        }

        const users = await response.json();
        const userCount = users.length;

        return NextResponse.json({ userCount });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
