'use client';
 
import { useRouter } from 'next/navigation';

const CreateVehicleButton = () => {
    const router = useRouter();

    return ( 
        <div className='relative'>
            <button onClick={() => router.push('/create-vehicle')}>Create Vehicle</button>
        </div>
    );
};

export default CreateVehicleButton; 