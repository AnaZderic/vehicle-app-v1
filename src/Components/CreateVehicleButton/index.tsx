"use client";
 
import { useRouter } from "next/navigation";

const CreateVehicleButton = () => {
    const router = useRouter();

    return ( 
        <div className="relative">
            <button onClick={() => {router.push("/CreateVehicle")}}>Create Vehicle</button>
        </div>
    );
};

export default CreateVehicleButton; 