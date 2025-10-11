import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { name, surname, username, email, password, confirmPassword } = await request.json();

    if (!name || !surname || !username || !email || !password || !confirmPassword) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    if (password !== confirmPassword) {
        return NextResponse.json({ error: 'Passwords do not match' }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
        return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            surname,
            username,
            email,
            password: hashedPassword,
        },
    });

    return NextResponse.json({
        success: true,
        user: { id: user.id, email: user.email, username: user.username },
    });
}
