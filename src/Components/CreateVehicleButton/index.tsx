"use client";
 
import RedirectButton from "../Buttons/RedirectButton/RedirectButton";

const CreateVehicleButton = () => {
    return ( 
        <div className="relative">
            <RedirectButton text="Create Vehicle" path="/CreateVehicle" />
        </div>
    );
};

export default CreateVehicleButton; 