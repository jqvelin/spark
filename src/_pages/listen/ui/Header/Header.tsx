import { LogoLink } from "./LogoLink";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox/SearchBox";

export const Header = () => {
    return (
        <header className="flex h-[var(--header-height)] items-center justify-center px-2 shadow-sm shadow-primary/20">
            <LogoLink />
            <SearchBox />
            <Profile />
        </header>
    );
};
