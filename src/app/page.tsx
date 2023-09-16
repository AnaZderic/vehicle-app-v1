"use client";

import CreateVehicleButton from "@/Components/CreateVehicleButton";
import Filtering from "@/Components/Filtering";
import Sorting from "@/Components/Sorting";
import Pagination from "@/Components/Pagination";

const Page = () => {
    return (
      <div className="p-6">
        <CreateVehicleButton />
        <Filtering />
        <Sorting />
        <Pagination />
      </div>
    );
  };

  export default Page; 