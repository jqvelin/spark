export const composeComponents =
    (
        ...components: ((
            props: React.PropsWithChildren<any>
        ) => React.ReactNode)[]
    ) =>
    (props: React.PropsWithChildren) =>
        components.reduce((acc, component) => {
            return component({ children: acc });
        }, props.children);
