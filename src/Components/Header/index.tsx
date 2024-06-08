"use client";

import AppLogo from "../AppLogo";

const Header = () => {
    return(
       <div>
        <header className="sticky shadow-md z-50 w-full px-5 py-2 flex justify-between items-center bg-slate-300">
            <AppLogo />
        </header>
       </div>
    );
};

export default Header; 