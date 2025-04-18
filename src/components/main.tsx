import { ComponentChild } from "preact";

export const Main = ({
    children,
    previous,
    next,
}: {
    children: ComponentChild;
    previous: ComponentChild;
    next: ComponentChild;
}) => {
    return (
        <>
            
            <main>{children}</main>
        </>
    );
};
