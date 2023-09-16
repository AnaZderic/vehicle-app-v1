"use client";

import VehicleCard from "@/Components/VehicleCard";
import MakeModel from "@/Models/Entities/make";
import MakeRepository from "@/Repository/MakeRepository";
import RedirectButton from "@/Components/Buttons/RedirectButton/RedirectButton";

const CreateVehicle = async () => {
    let makeRepository: MakeRepository = new MakeRepository();
    let makes = (await makeRepository.readMakes()).result as MakeModel[];
    
    return (
        <div>
            <div>
                <RedirectButton text="Create Make" path="/CreateMake" />
            </div>
            <div className="h-full px-6 py-12 lg:flex lg:justify-center">
            {makes.map((make: MakeModel) => (
                <VehicleCard key={make.id as string} id={make.id as string} name={make.name} abrv={make.abrv} img={make.img} />
            ))
            }
        </div>
        </div>
        
    );
};

export default CreateVehicle; 