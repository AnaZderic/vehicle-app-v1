"use client";

import { useParams } from "next/navigation";

const CreateModel = () => {
    // let makeRepository: MakeRepository = new MakeRepository();
    const { id } = useParams();

    return (
        <div className="h-full px-6 py-12 lg:flex lg:justify-center">
            <p>Create Vehicle Model for Make with ID: {id}</p>
        </div>
    );
};

export default CreateModel; 