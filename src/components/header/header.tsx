import SearchBar from "../search-bar/search-bar";
import AppLogo from "../app-logo/app-logo";

const Header = () => {
    return(
       <div>
        <header className="sticky bg-white shadow-md z-50 w-full px-5 py-2 flex justify-between items-center">
            <a className="" href="">
                <AppLogo />
            </a>
            <span>
                <SearchBar />
            </span>
        </header>
       </div>
    );
};

export default Header; 