import SearchInput from "./SearchInput";
import NavBar from "./NavBar";

function Header(){
    return (
        <header className="flex flex-col gap-3 items-center p-3 xl:px-65 bg-violet-500 sticky top-0 w-full z-10">
            <div className="w-[min(100%,40rem)]">
                <SearchInput />
            </div>
            <NavBar />
        </header>
    );
}

export default Header;