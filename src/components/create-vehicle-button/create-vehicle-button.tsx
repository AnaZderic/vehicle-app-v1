'use client';
 
import { useRouter } from 'next/navigation';

export default function CreateVehicleButton() {
    const router = useRouter();

    return ( 
        <button onClick={() => router.push('/create-vehicle')}>Create Vehicle</button>
    );
};