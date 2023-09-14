'use client';

import CreateVehicleButton from "@/Components/CreateVehicleButton";
import Filtering from "@/Components/Filtering";
import Sorting from "@/Components/Sorting";
import Pagination from "@/Components/Pagination";
import MakeRepository from "@/Repository/MakeRepository";

const Page = () => {
    let makeRepository: MakeRepository = new MakeRepository();
    console.log(makeRepository.readMake('cMonyJCL1XUMatUdj2Fx'));
    console.log(makeRepository.readMakes());
    
    return (
      <div className="p-6">
        <CreateVehicleButton />
        <Filtering />
        <Sorting />
        <Pagination /> 
      </div>
    );
  }

  export default Page; 