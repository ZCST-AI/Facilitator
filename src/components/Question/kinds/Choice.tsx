import { pipe } from "fp-ts/lib/function";
import type { Choice as ChoiceType } from "../../../libraries/completions/questions";
import { QuestionBase } from "./QuestionBase";
import { mapWithIndex } from "fp-ts/lib/Array";

export const Choice = (choice: ChoiceType) => {
    const { options, correctAnswer, studentAnswer } = choice;

    console.log(correctAnswer, studentAnswer);

    return (
        <QuestionBase question={choice}>
            <div class="w-full grid gap-4 py-2!">
                {pipe(
                    options,
                    mapWithIndex((index, option) => (
                        <div
                            class={`w-fit overflow-hidden flex flex-row gap-2 text-2xl! items-center ${index === correctAnswer.content ? "bg-green-400/25" : undefined} px-2!`}
                        >
                            <div>{option.symbol}</div>
                            <div>{option.content}</div>
                        </div>
                    )),
                )}
            </div>
        </QuestionBase>
    );
};
