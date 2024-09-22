import { LogoLink } from "./LogoLink";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox/SearchBox";

export const Header = () => {
    return (
        <header className="flex h-header w-full items-center justify-center bg-white px-2 shadow-sm shadow-primary/20">
            <LogoLink />
            <SearchBox />
            <Profile />
        </header>
    );
};
