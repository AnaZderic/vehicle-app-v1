"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AppLogo = () => {
    const router = useRouter();
    
    return ( 
            <Link href="/">
            <Image 
                src="/images/app-logo-01.png" 
                width={200}
                height={200}
                alt="App Logo"
            />
            </Link>
    );
}

export default AppLogo; 
