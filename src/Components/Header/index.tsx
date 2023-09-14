'use client';

import SearchBar from "../SearchBar";
import AppLogo from "../AppLogo";
import SubmitButton from "../Buttons/SubmitButton/SubmitButton";

const Header = () => {
    return(
       <div>
        <header className="sticky shadow-md z-50 w-full px-5 py-2 flex justify-between items-center bg-slate-300">
            <AppLogo />
            <span>
                <SearchBar />
                <SubmitButton text="Search" />
            </span>
        </header>
       </div>
    );
};

export default Header; 