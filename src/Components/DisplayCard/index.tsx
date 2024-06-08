import MakeModel from "@/Models/Entities/make";
import MakeRepository from "@/Repository/MakeRepository";
import VehicleCard from "../VehicleCard";

 
const DisplayCard = async({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) => {
    let makeRepository: MakeRepository = new MakeRepository();
    
    const query = searchParams?.query || "";    
    let makes = (await makeRepository.readMakesFiltered(query)).result as MakeModel[];
    const currentPage = Number(searchParams?.page) || 1;

    return ( 
        <div className="relative">
            <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {makes.map((make: MakeModel) => (
                    <VehicleCard key={make.id as string} id={make.id as string} name={make.name} abrv={make.abrv} img={make.img} />
                ))}
            </div>
        </div>
    );
};

export default DisplayCard; 