import { cn } from "../lib/utils";

export const Loader = ({ ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            {...props}
            className={cn(
                "[margin:auto] w-16 aspect-square md:w-20 lg:w-36 border-4 rounded-full bg-transparent border-r-transparent border-b-transparent border-l-transparent border-t-primary animate-spin",
                props.className
            )}
        ></div>
    );
};
