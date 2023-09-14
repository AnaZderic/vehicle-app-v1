'use client';

import { useRouter } from 'next/navigation'


const RedirectButton = ({ text, path } : { text: string, path: string }) =>
{
    const router = useRouter();

    return (
        <button onClick={() => router.push(path)}
        >{text}</button>
    )
}

export default RedirectButton; 