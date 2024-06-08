"use client";

import { useRouter } from "next/navigation";

const RedirectButton = ({ text, path } : { text: string, path: string }) => {
    const router = useRouter();

    return (
        <button className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded" onClick={() => router.push(path)}>{text}</button>
    );
}

export default RedirectButton; 