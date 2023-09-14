'use client';

import SubmitButton from "../Buttons/SubmitButton/SubmitButton";

const SearchBar = () => {
    return ( 
        <form>
            <input className="!outline-none bg-grey-200 text-slate-600 font-bold rounded py-2 px-4" type="search" placeholder="Search" aria-label="Search" />
            <SubmitButton text="Search" />
        </form>
    );
};

export default SearchBar;