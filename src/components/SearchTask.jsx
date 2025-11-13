import { useState } from "react";
import { GoSearch } from "react-icons/go";

export default function SearchTask({ onSearch }) {
    const [searchText, setSearchText] = useState();

    return (
        <form>
            <div className="flex">
                <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
                        placeholder="Search Task"
                        required
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        type="button"
                        className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
                        onClick={() => onSearch(searchText)}
                    >
                        <GoSearch />
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    );
}
