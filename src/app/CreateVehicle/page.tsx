'use client';

import VehicleCard from "@/Components/VehicleCard";
import MakeModel from "@/Models/Entities/make";
import MakeRepository from "@/Repository/MakeRepository";

const CreateVehicle = async () => {
    let makeRepository: MakeRepository = new MakeRepository();
    let makes: MakeModel[] =  await makeRepository.getMakes();
    
    return (
        <div className="h-full px-6 py-12 lg:flex lg:justify-center">
            {makes.map((make: MakeModel) => (
                <VehicleCard key={make.id as string} id={make.id as string} name={make.name} abrv={make.abrv} img={make.img} />
            ))
            }
        </div>
    );
};

export default CreateVehicle; 