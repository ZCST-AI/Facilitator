import { string, array, union } from "zod";
import { QuestionBase } from "./base";

export const FreeLiterature = QuestionBase("free-literature", string())
    .extend({
        suggestions: array(string().min(1))
            .optional()
            .describe("Optional suggestions or hints for formulating the answer."),
    })
    .describe("A literature-related free-response question.");

export const FreeMath = QuestionBase(
    "free-math",
    array(string().min(1).describe("If it's a calculation, please don't start with the prefix equate.")).describe(
        "The steps to solve the math problem.",
    ),
).describe("A math-related free-response question.");

export const Free = union([FreeLiterature, FreeMath]);
