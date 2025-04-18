import { Link, Tile } from "@carbon/react";

export const NotFound = () => {
    return (
        <div class="w-full h-full flex flex-col items-center justify-center">
            <Tile class="flex flex-col gap-4">
                <h1 class="text-2xl!">Page not found</h1>
                <br />
                <Link href="/">Go home</Link>
            </Tile>
        </div>
    );
};
