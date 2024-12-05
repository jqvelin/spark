import { ReactNode } from "react";

export const composeComponents =
    (...components: ((props: React.PropsWithChildren<any>) => ReactNode)[]) =>
    (props: React.PropsWithChildren) =>
        components.reduce((acc, component) => {
            return component({ children: acc });
        }, props.children);
