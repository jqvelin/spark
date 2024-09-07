import Image from "next/image";

export const ProductDescription = () => {
    return (
        <div className="mb-16 self-end pr-4 text-end">
            <Image
                src="logo.svg"
                width={1000}
                height={1000}
                alt="logo"
                className="fixed right-0 top-1/2 -z-10 -translate-y-1/2 translate-x-1/2 opacity-50"
            />
            <h1 className="mb-8 text-4xl font-bold leading-relaxed text-white md:text-5xl md:leading-[64px] lg:text-6xl lg:leading-[86px]">
                ✨ It all starts
                <br />
                with a <span className="text-with-gradient">Spark</span>.
            </h1>
            <div className="flex flex-col text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
                <span>Listen to your favorite music with</span>
                <ul>
                    <li>
                        <span className="text-purple-600">-</span> no ads
                    </li>
                    <li>
                        <span className="text-purple-600">-</span> no
                        memberships
                    </li>
                    <li>
                        <span className="text-purple-600">-</span> no
                        restrictions
                    </li>
                </ul>
            </div>
        </div>
    );
};
