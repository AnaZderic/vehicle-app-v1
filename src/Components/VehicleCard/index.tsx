"use client";

import MakeModel from "@/Models/Entities/make";
import Image from "next/image";
import { useRouter } from "next/navigation";

const VehicleCard = (props: MakeModel) => {
    const {id, name, abrv, img} = props; 
    const router = useRouter();
    
    return (
        <span className="p-2" onClick={() => {router.push(`/CreateModel/${id}`)}}>
            {img && <Image src={img} width={200} height={200} alt="" />} 
            <h1>Vehicle Make: </h1>
            <p>{name}</p>
            <p>{abrv}</p>
        </span>
    );
};

export default VehicleCard;