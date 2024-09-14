import { LogoLink } from "./LogoLink";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox/SearchBox";

export const Header = () => {
    return (
        <header className="flex h-[60px] items-center justify-center px-2 shadow-sm shadow-primary/20">
            <LogoLink />
            <SearchBox />
            <Profile />
        </header>
    );
};
