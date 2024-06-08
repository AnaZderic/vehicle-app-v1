"use client";

import RedirectButton from "@/Components/Buttons/RedirectButton/RedirectButton";
import Search from "@/Components/Search";
import DisplayCard from "@/Components/DisplayCard";
import { useSearchParams } from "next/navigation";
import SearchParamsModel from "@/Models/Entities/searchParams";

const CreateVehicle = async () => {
    const params = useSearchParams();
    const queryParam = params.get("query") || "";
    const pageParam = params.get("page") || 1;
    let searchParamsModel = {
        query: queryParam,
        page: pageParam
    } as SearchParamsModel;
    return (
        <div className="p-6">
            <div className="w-full">
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-2xl text-slate-700 font-mono">Vehicle Makes</h1>
                </div>
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                    <Search placeholder="Search makes..." />
                    <RedirectButton text="Create Make" path="/CreateMake" />
                </div>
                <div className="p-6">
                <DisplayCard searchParams={searchParamsModel} />
            </div>
                <div className="mt-5 flex w-full justify-center">
                </div>
            </div>
        </div>
        
    );
};

export default CreateVehicle; 