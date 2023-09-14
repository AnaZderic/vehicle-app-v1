'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const VehicleCard = (props: {id:string, name: string, abrv: string, img: string}) => {
    const {id, name, abrv, img} = props; 
    const router = useRouter();
    
    return (
        <span className="p-2" onClick={() => {router.push(`/CreateModel/${id}`)}}>
            <Image src={img} width={200} height={200} alt="" />
            <h1>Vehicle Make: </h1>
            <p>{name}</p>
            <p>{abrv}</p>
        </span>
    );
};

export default VehicleCard;