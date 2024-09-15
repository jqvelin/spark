import { LogoLink } from "./LogoLink";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox/SearchBox";

export const Header = () => {
    return (
        <header className="flex h-[var(--header-height)] fixed top-0 left-0 z-50 w-full bg-white items-center justify-center px-2 shadow-sm shadow-primary/20">
            <LogoLink />
            <SearchBox />
            <Profile />
        </header>
    );
};
