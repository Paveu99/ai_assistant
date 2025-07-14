import { prisma } from '@/lib/db';
import Link from 'next/link';
import { createPost } from './actions';
import './globals.css';
import Button from '@mui/material/Button';

export default async function Home() {
    const posts = await prisma.post.findMany();

    return (
        <div className="text-center pt-12">
            <h1 className="text-3xl font-bold">Hello World!</h1>
            <Link href="/test">Go to test</Link>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
            <form
                action={createPost}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    maxWidth: '200px',
                }}
            >
                <input name="title" className="border-2" type="text" />
                <input name="content" className="border-2" type="text" />
                <Button type="submit" color='primary'>
                    KLICK
                </Button>
            </form>
        </div>
    );
}
