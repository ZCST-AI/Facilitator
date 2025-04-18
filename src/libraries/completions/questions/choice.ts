import { array, object, string, union, ZodType } from "zod";
import { QuestionBase, PositiveInt } from "./base";

const ChoiceBase = <T extends string, C extends ZodType<any>>(type: T, content: C) =>
    QuestionBase(type, content).extend({
        options: array(
            object({
                symbol: string().min(1).describe("The identifier for the option (e.g., 'A', 'B', '1')."),
                content: string().min(1).describe("The text content of the option."),
            }),
        )
            .min(2)
            .describe("The list of possible options for the question."),
    });

export const ChoiceSingle = ChoiceBase("choice-single", PositiveInt).describe(
    "A single-choice question where only one option is correct.",
);

export const ChoiceMultiple = ChoiceBase("choice-multiple", array(PositiveInt)).describe(
    "A multiple-choice question where one or more options can be correct.",
);

export const Choice = union([ChoiceSingle, ChoiceMultiple]);
