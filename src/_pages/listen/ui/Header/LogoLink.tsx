import { paths } from "@/shared/routing";
import Image from "next/image";
import Link from "next/link";

export const LogoLink = () => {
    return (
        <Link
            href={paths.root}
            className="rounded-full border-2 border-transparent transition-all hover:scale-105 hover:border-primary"
        >
            <Image
                src="logo.svg"
                width={48}
                height={48}
                alt="logo"
                className="rounded-full bg-white"
            />
        </Link>
    );
};
