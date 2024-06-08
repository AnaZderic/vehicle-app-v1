"use client";

import MakeModel from "@/Models/Entities/make";
import Image from "next/image";
import { useRouter } from "next/navigation";

const VehicleCard = (props: MakeModel) => {
    const {id, name, abrv, img} = props; 
    const router = useRouter();
    
    return (
        <span className="p-4 bg-white shadow-md border-2 border-slate-300 rounded-lg overflow-hidden transition-transform transform hover:scale-105 text-slate-700 font-mono text-xl cursor-pointer" onClick={() => {router.push(`/CreateModel/${id}`)}}>
            <div className="my-5 flex justify-center items-center">
                {img && <Image src={img} width={200} height={200} alt="" className="h-48" />} 
            </div>
            <div>
                <div className="flex justify-center items-center">
                    <h3 className="text-xl font-semibold text-gray-800">Vehicle Make: </h3>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <p className="text-gray-600 mt-2">{name}</p>
                    <p className="text-gray-700 font-bold mt-2">{abrv}</p>
                </div>
            </div>
        </span>
    );
};

export default VehicleCard;