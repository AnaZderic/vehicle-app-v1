'use client';

import CreateVehicleButton from "@/components/create-vehicle-button/create-vehicle-button";
import Filtering from "@/components/filtering/filtering";
import Sorting from "@/components/sorting/sorting";
import VehicleCard from "@/components/vehicle-card/vehicle-card";
import Pagination from "@/components/pagination/pagination";

const Page = () => {
    return (
      <div>
        <CreateVehicleButton />
        <hr />
        <Filtering />
        <Sorting />
        <hr />
        <VehicleCard />
        <hr />
        <Pagination /> 
        <hr />
      </div>
    );
  }

  export default Page; 