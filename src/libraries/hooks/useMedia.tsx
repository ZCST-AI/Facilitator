import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { Either, isRight, left, right } from "fp-ts/Either";
import { exec } from "../utils/exec";

type Result = Either<Error, MediaStream>;

const getMedia = async (constraints: MediaStreamConstraints): Promise<Result> => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        return right(stream);
    } catch (error) {
        return left(error as Error);
    }
};

export const useMedia = (constraints: MediaStreamConstraints) => {
    const media = useSignal<Result>(left(new Error("Waiting for media...")));

    useEffect(() => {
        exec(async () => {
            const result = await getMedia(constraints);
            media.value = result;
        });

        return () => {
            if (isRight(media.value)) media.value.right.getTracks().forEach((track) => track.stop());
        };
    }, []);

    return media;
};
